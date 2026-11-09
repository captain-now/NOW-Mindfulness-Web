// Firebase Cloud Functions v2 — deploy separately with Firebase CLI.
// This job reads each user's existing backup and writes ONLY an aggregate number.
// Important: client-side award events are not server-authoritative. Do not use this
// aggregate to distribute real cryptocurrency without server-side verification.
const {onSchedule}=require("firebase-functions/v2/scheduler");
const {initializeApp}=require("firebase-admin/app");
const {getFirestore,FieldPath}=require("firebase-admin/firestore");
initializeApp();
exports.rebuildNowCommunityTotal=onSchedule(
 {schedule:"every 60 minutes",timeZone:"Asia/Seoul",region:"asia-northeast3",memory:"512MiB",timeoutSeconds:540},
 async()=>{
  const db=getFirestore();
  let total=0,accounts=0,invalid=0,last=null;
  do{
   let q=db.collectionGroup("backups").orderBy(FieldPath.documentId()).limit(400);
   // Collection-group queries on document IDs can require an index.
   if(last)q=q.startAfter(last);
   const snap=await q.get();
   for(const doc of snap.docs){
    // Only count the expected users/{uid}/backups/latest records.
    if(!/^users\/[^/]+\/backups\/latest$/.test(doc.ref.path))continue;
    const raw=doc.data()?.data?.["now-demo-v1"];
    if(typeof raw!=="string")continue;
    try{
     const parsed=JSON.parse(raw);
     if(!Array.isArray(parsed.events))continue;
     let subtotal=0;
     for(const e of parsed.events){
      if(!e||!["chant","meditate",...Array.from({length:10},(_,i)=>"d"+i)].includes(e.id)
       ||typeof e.date!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)
       ||!Number.isInteger(e.amount)||!((e.id==="chant"||e.id==="meditate")?[2,5].includes(e.amount):e.amount===1))
       throw Error("Invalid event");
      subtotal+=e.amount;
     }
     if(!Number.isSafeInteger(subtotal))throw Error("Invalid total");
     total+=subtotal;accounts++;
    }catch(e){invalid++;}
   }
   last=snap.docs.at(-1)||null;
   if(snap.size<400)break;
  }while(true);
  if(!Number.isSafeInteger(total))throw Error("Aggregate overflow");
  await db.doc("publicStats/community").set({totalEarned:total,accountsCounted:accounts,invalidAccounts:invalid,updatedAt:new Date().toISOString()});
 }
);
