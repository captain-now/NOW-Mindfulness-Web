/**
 * NOW community totals — Firebase Cloud Functions v2.
 * Deployment requires Firebase project administrator access.
 * Never expose member backup documents to the public.
 */
const {onSchedule}=require("firebase-functions/v2/scheduler");
const {initializeApp}=require("firebase-admin/app");
const {getFirestore,FieldValue,FieldPath}=require("firebase-admin/firestore");
initializeApp();
exports.rebuildNowCommunityTotals=onSchedule(
 {schedule:"every 60 minutes",timeZone:"Asia/Seoul",region:"asia-northeast3",memory:"512MiB",timeoutSeconds:540},
 async()=>{
  const db=getFirestore();
  let cursor=null, lifetime=0, members=0, today=0, scanned=0;
  const date=new Date(Date.now()+9*3600000).toISOString().slice(0,10);
  do{
   let query=db.collectionGroup("backups").orderBy(FieldPath.documentId()).limit(250);
   // A collectionGroup query would also include unrelated backups: filter by path below.
   if(cursor)query=query.startAfter(cursor);
   const page=await query.get();
   if(page.empty)break;
   for(const doc of page.docs){
    if(!/^users\/[^/]+\/backups\/latest$/.test(doc.ref.path))continue;
    scanned++;
    const raw=doc.data()?.data?.["now-demo-v1"];
    if(typeof raw!=="string"||raw.length>3000000)continue;
    let parsed;try{parsed=JSON.parse(raw)}catch{continue}
    if(!Array.isArray(parsed?.events))continue;
    let memberTotal=0,memberToday=0;
    for(const e of parsed.events){
     if(!e||!(/^(chant|meditate|d[0-9])$/.test(e.id))||!/^\d{4}-\d{2}-\d{2}$/.test(e.date))continue;
     if(!Number.isFinite(e.amount))continue;
     if(e.id==="chant"||e.id==="meditate"){if(e.amount!==2&&e.amount!==5)continue}
     else if(e.amount!==1)continue;
     memberTotal+=e.amount;
     if(e.date===date)memberToday+=e.amount;
    }
    lifetime+=memberTotal;today+=memberToday;members++;
   }
   cursor=page.docs[page.docs.length-1];
   if(page.size<250)break;
  }while(true);
  await db.doc("publicStats/nowCommunity").set({
   lifetimeNow:lifetime,todayNow:today,memberCount:members,scanned,
   calculatedAt:FieldValue.serverTimestamp(),
   note:"Informational only; user-submitted event records, not validated token entitlements"
  });
 }
);
