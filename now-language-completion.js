(function(){'use strict';const languages=['ko','en','zh','ja'];const entries={"SEON MEDITATION · 참선":["SEON MEDITATION · 참선","SEON MEDITATION","SEON MEDITATION · 坐禅","SEON MEDITATION · 座禅"],"마음도 아니고 부처도 아니고 물건도 아니니, 이것이 무엇인가? 화두를 들으며 참구합니다.":["마음도 아니고 부처도 아니고 물건도 아니니, 이것이 무엇인가? 화두를 들으며 참구합니다.","Neither mind, nor Buddha, nor a thing—what is it? Contemplate this question.","非心非佛非物，究竟是什么？静心参究此话头。","心でも仏でも物でもない。これは何か。問いを抱いて参究しましょう。"],"🎧 화두 음성 · 30분 자동 반복":["🎧 화두 음성 · 30분 자동 반복","🎧 Meditation audio · 30-minute loop","🎧 话头音频 · 30分钟循环","🎧 話頭音声・30分ループ"],"아래 ▶ 버튼으로 음성을 확인할 수 있습니다. 참선 시작 버튼을 누르면 타이머와 함께 재생됩니다.":["아래 ▶ 버튼으로 음성을 확인할 수 있습니다. 참선 시작 버튼을 누르면 타이머와 함께 재생됩니다.","Preview the audio with ▶ below. Starting meditation plays it with the timer.","点击下方▶试听音频。开始坐禅后会与计时器同步播放。","下の▶で音声を確認できます。座禅開始時にタイマーと一緒に再生されます。"],"화두 음성 준비 중":["화두 음성 준비 중","Preparing meditation audio","正在准备话头音频","話頭音声を準備中"],"음성이 나오지 않을 때 파일 직접 선택 (선택사항)":["음성이 나오지 않을 때 파일 직접 선택 (선택사항)","Choose an audio file if playback fails (optional)","如无法播放，请手动选择音频文件（可选）","再生できない場合は音声ファイルを選択（任意）"],"음성 준비 완료 · ▶ 재생 가능":["음성 준비 완료 · ▶ 재생 가능","Audio ready · ▶ Play","音频已就绪 · ▶ 播放","音声の準備完了・▶ 再生可能"],"화두 음성 재생 중":["화두 음성 재생 중","Meditation audio playing","正在播放话头音频","話頭音声を再生中"],"화두 음성 일시정지":["화두 음성 일시정지","Meditation audio paused","话头音频已暂停","話頭音声を一時停止中"],"음성파일을 불러오지 못했습니다. 아래에서 now_hwadu.m4a 파일을 선택하거나 GitHub 파일 경로를 확인해 주세요.":["음성파일을 불러오지 못했습니다. 아래에서 now_hwadu.m4a 파일을 선택하거나 GitHub 파일 경로를 확인해 주세요.","Could not load audio. Select now_hwadu.m4a below or check the GitHub file path.","音频加载失败。请在下方选择 now_hwadu.m4a 或检查 GitHub 文件路径。","音声を読み込めません。下で now_hwadu.m4a を選ぶかGitHubのパスを確認してください。"],"일지와 수행 기록은 로그인한 계정의 Firebase에 저장됩니다.":["일지와 수행 기록은 로그인한 계정의 Firebase에 저장됩니다.","Journal and practice records are saved to your signed-in Firebase account.","日记和修行记录保存在已登录账户的 Firebase 中。","日記と修行記録はログイン中のFirebaseアカウントに保存されます。"],"☁️ Firebase 전용 기록 저장":["☁️ Firebase 전용 기록 저장","☁️ Firebase record storage","☁️ Firebase 云端记录","☁️ Firebase記録保存"],"Google 로그인 후 일지·NOW 적립·수행 기록을 Firebase에 백업합니다.":["Google 로그인 후 일지·NOW 적립·수행 기록을 Firebase에 백업합니다.","Sign in with Google to back up journal, NOW rewards and practice records to Firebase.","使用 Google 登录后，将日记、NOW 积分和修行记录备份到 Firebase。","Googleでログインすると、日記・NOW獲得・修行記録をFirebaseにバックアップします。"],"Firebase 로그인 및 기록 확인 중…":["Firebase 로그인 및 기록 확인 중…","Checking Firebase sign-in and records…","正在检查 Firebase 登录及记录…","Firebaseログインと記録を確認中…"],"일지·수행·NOW 적립은 Firebase에만 저장됩니다. 인터넷 연결이 필요합니다.":["일지·수행·NOW 적립은 Firebase에만 저장됩니다. 인터넷 연결이 필요합니다.","Journal, practice and NOW rewards are stored in Firebase only. Internet is required.","日记、修行和 NOW 积分仅保存在 Firebase，需要网络连接。","日記・修行・NOW獲得はFirebaseのみに保存されます。インターネット接続が必要です。"],"이 기기에 저장된 시험용 적립 기록":["이 기기에 저장된 시험용 적립 기록","Demo reward records saved on this device","本设备保存的体验积分记录","この端末に保存されたデモ獲得記録"],"나의 누적 적립":["나의 누적 적립","My total earned","我的累计获得","自分の累計獲得"],"실제 가상자산이 아니며 거래·출금·1:1 교환 기능은 아직 제공되지 않습니다.":["실제 가상자산이 아니며 거래·출금·1:1 교환 기능은 아직 제공되지 않습니다.","These are not crypto assets. Trading, withdrawal and 1:1 exchange are unavailable.","这不是实际加密资产，暂不支持交易、提现或1:1兑换。","実際の暗号資産ではなく、取引・出金・1:1交換には対応していません。"],"🌏 NOW 커뮤니티":["🌏 NOW 커뮤니티","🌏 NOW Community","🌏 NOW 社区","🌏 NOW コミュニティ"],"전체 회원 누적 적립 NOW":["전체 회원 누적 적립 NOW","Community-wide NOW earned","全体会员累计 NOW","全会員のNOW累計獲得"],"집계 준비 중":["집계 준비 중","Preparing community totals","正在准备统计","集計を準備中"],"개인 기록을 공개하지 않고 전체 합계만 표시합니다.":["개인 기록을 공개하지 않고 전체 합계만 표시합니다.","Only the combined total is shown; personal records remain private.","仅显示总计，不公开个人记录。","個人の記録は公開せず、合計のみ表示します。"],"적립 내역":["적립 내역","Reward history","积分记录","獲得履歴"],"지금 이 순간, 마음챙김":["지금 이 순간, 마음챙김","Mindfulness in this moment","此时此刻，正念","今この瞬間、マインドフルネス"],"Google로 로그인":["Google로 로그인","Sign in with Google","使用 Google 登录","Googleでログイン"],"로그인 없이 둘러보기":["로그인 없이 둘러보기","Browse without signing in","无需登录即可浏览","ログインせずに見る"],"전체 누적 적립":["전체 누적 적립","All-time earned","累计获得","累計獲得"],"염불참선":["염불참선","Chanting · Meditation","念佛 · 坐禅","念仏・座禅"],"30분 · +5 NOW":["30분 · +5 NOW","30 min · +5 NOW","30分钟 · +5 NOW","30分・+5 NOW"],"NOW 체험판 · 이 기기의 브라우저에만 저장됩니다. 브라우저 데이터를 지우면 기록도 삭제될 수 있습니다.":["NOW 체험판 · 이 기기의 브라우저에만 저장됩니다. 브라우저 데이터를 지우면 기록도 삭제될 수 있습니다.","NOW demo · Records stored in this browser may be lost if browser data is cleared.","NOW 体验版 · 记录保存在本浏览器中，清除数据可能导致记录丢失。","NOWデモ版・記録はこのブラウザーに保存され、データ削除で失われる場合があります。"]};const reverse=new Map();for(const [ko,forms] of Object.entries(entries)){for(const f of forms)reverse.set(f,ko)}let busy=false,scheduled=false;function current(){const e=document.getElementById('language');return e&&languages.includes(e.value)?e.value:'ko'}function translate(v,lang){const m=v.match(/^(\s*)([\s\S]*?)(\s*)$/);if(!m||!m[2])return v;const key=reverse.get(m[2]);return key?m[1]+entries[key][languages.indexOf(lang)]+m[3]:v}function apply(){if(busy)return;busy=true;const lang=current();const root=document.querySelector('.app');if(root){const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walk.nextNode()){const n=walk.currentNode;if(n.parentElement&&!n.parentElement.closest('script,style,textarea,input,select,option,#journalEntries,#tasks,#history'))nodes.push(n)}for(const n of nodes){const v=translate(n.nodeValue,lang);if(v!==n.nodeValue)n.nodeValue=v}for(const el of root.querySelectorAll('[placeholder],[aria-label],[title]')){if(el.closest('#journalEntries,#tasks,#history'))continue;for(const attr of ['placeholder','aria-label','title']){const v=el.getAttribute(attr);if(v){const next=translate(v,lang);if(next!==v)el.setAttribute(attr,next)}}}}busy=false}function schedule(){if(busy||scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;apply()})}const old=window.setLanguage;if(typeof old==='function')window.setLanguage=function(v){old(v);schedule()};const select=document.getElementById('language');if(select)select.addEventListener('change',schedule);const obs=new MutationObserver(schedule);const app=document.querySelector('.app');if(app)obs.observe(app,{subtree:true,childList:true,characterData:true});apply();})();

// NOWMS issuance and exchange announcement in the wallet.
(function () {
  'use strict';

  const wallet = document.getElementById('wallet');
  if (!wallet || document.getElementById('nowms-issuance-notice')) return;

  const translations = {
      en: {
        status: 'Issuance in preparation',
        address: 'The official Solana token address will be published here after issuance.',
        earnNow: 'Earn NOW coins',
        earnNowMethod: 'Earn NOW coins through mindfulness sessions and daily activities in NOW Mindfulness.',
        earnNowStorage: 'When you sign in with Google, your NOW coin reward history is automatically saved and managed in Firebase Cloud Firestore under your account.',
        issuance: 'Issuance plan', network: 'Network', supply: 'Planned supply',
        exchangeAllocation: 'For exchange', operatorAllocation: 'For operations',
        mint: 'The plan is to issue all 100 million tokens at once and then revoke the mint authority.',
        exchange: 'NOW Mindfulness points exchange plan',
        exchangeTiming: 'The exchange is in preparation. The start date and instructions will be announced once confirmed.',
        phase: 'Phase', allocation: 'Allocation (NOWMS)', points: 'Points per NOWMS',
        longTerm: 'The final 10 million NOWMS in Phase 5 are planned for long-term exchange.',
        use: 'Use cases and exchange listings',
        useTiming: 'NOWMS use cases and whether to pursue exchange listings will be decided later.'
      },
      zh: {
        status: '发行筹备中', address: '发行后将在本页公布官方 Solana 代币地址。',
        earnNow: '获取 NOW 积分',
        earnNowMethod: '在 NOW 正念中完成修行和日常实践，即可获得 NOW 积分。',
        earnNowStorage: '使用 Google 账号登录后，NOW 积分记录会按账号自动保存在 Firebase Cloud Firestore 数据库中并进行管理。',
        issuance: '发行计划', network: '网络', supply: '计划发行总量',
        exchangeAllocation: '兑换份额', operatorAllocation: '运营份额',
        mint: '计划一次性发行 1 亿枚代币，随后撤销增发权限。',
        exchange: 'NOW 正念积分兑换计划', exchangeTiming: '兑换筹备中。开始日期及兑换方式将在确定后公布。',
        phase: '阶段', allocation: '分配量（NOWMS）', points: '每枚 NOWMS 所需积分',
        longTerm: '第 5 阶段的最后 1,000 万枚 NOWMS 计划用于长期兑换。',
        use: '用途与交易所上线', useTiming: 'NOWMS 的用途及是否在交易所上线将于日后决定。'
      },
      ja: {
        status: '発行準備中', address: '発行後、公式の Solana トークンアドレスをこのページで公開します。',
        earnNow: 'NOW コインを貯める',
        earnNowMethod: 'NOW マインドフルネスで瞑想などの修行や日々の実践に取り組むと、NOW コインを貯められます。',
        earnNowStorage: 'Google アカウントでログインすると、NOW コインの獲得履歴が Firebase の Cloud Firestore データベースにアカウントごとに自動保存され、管理されます。',
        issuance: '発行計画', network: 'ネットワーク', supply: '発行予定総数',
        exchangeAllocation: '交換用', operatorAllocation: '運営用',
        mint: '1億枚を一括で発行し、その後に追加発行権限を放棄する予定です。',
        exchange: 'NOW マインドフルネスのポイント交換計画',
        exchangeTiming: '交換は準備中です。開始日と交換方法は確定後にお知らせします。',
        phase: '段階', allocation: '割当数（NOWMS）', points: '1 NOWMS に必要なポイント',
        longTerm: '第5段階の最後の1,000万 NOWMS は長期交換用に割り当てる予定です。',
        use: '用途と取引所への上場', useTiming: 'NOWMS の用途や取引所への上場の可否は今後決定します。'
      }
    };
  const titles = {
    ko: 'NOWMS 코인 발행 공고',
    en: 'NOWMS token issuance announcement',
    zh: 'NOWMS 代币发行公告',
    ja: 'NOWMS トークン発行のお知らせ'
  };
  const notice = document.createElement('details');
  notice.id = 'nowms-issuance-notice';
  notice.innerHTML = "<summary></summary>\n    <div class=\"hero\" aria-labelledby=\"nowms-notice-token-name\">\n      <img src=\"https://captain-now.github.io/mind-search/assets/nowms-logo.webp\" width=\"512\" height=\"512\" alt=\"\">\n      <div>\n        <h3 id=\"nowms-notice-token-name\">NOW Mind Search <span>(NOWMS)</span></h3>\n        <p class=\"status\" data-copy=\"status\">발행 준비 중</p>\n        <p data-copy=\"address\">공식 솔라나 토큰 주소는 발행 후 이 페이지에 공개합니다.</p>\n      </div>\n    </div>\n    <div aria-labelledby=\"nowms-notice-earn-now\">\n      <h3 id=\"nowms-notice-earn-now\" data-copy=\"earnNow\">NOW 코인 적립</h3>\n      <p data-copy=\"earnNowMethod\">NOW 마음챙김에서 수행과 일상 실천을 통해 NOW 코인을 적립할 수 있습니다.</p>\n      <p data-copy=\"earnNowStorage\">Google 계정으로 로그인하면 NOW 코인 적립 내역이 Firebase의 Cloud Firestore 데이터베이스에 계정별로 자동 저장되고 관리됩니다.</p>\n    </div>\n    <div aria-labelledby=\"nowms-notice-issuance\">\n      <h3 id=\"nowms-notice-issuance\" data-copy=\"issuance\">발행 계획</h3>\n      <dl>\n        <div><dt data-copy=\"network\">네트워크</dt><dd>Solana</dd></div>\n        <div><dt data-copy=\"supply\">총발행 예정량</dt><dd>100,000,000 NOWMS</dd></div>\n        <div><dt data-copy=\"exchangeAllocation\">교환용</dt><dd>80,000,000 NOWMS</dd></div>\n        <div><dt data-copy=\"operatorAllocation\">운영자용</dt><dd>20,000,000 NOWMS</dd></div>\n      </dl>\n      <p data-copy=\"mint\">1억 개를 한 번에 발행한 뒤 추가 발행 권한을 폐기할 계획입니다.</p>\n    </div>\n    <div aria-labelledby=\"nowms-notice-exchange\">\n      <h3 id=\"nowms-notice-exchange\" data-copy=\"exchange\">NOW 마음챙김 적립 코인 교환 계획</h3>\n      <p data-copy=\"exchangeTiming\">교환은 준비 중입니다. 시작일과 교환 방법은 확정 후 공개합니다.</p>\n      <table aria-labelledby=\"nowms-notice-exchange\">\n        <thead>\n          <tr><th scope=\"col\" data-copy=\"phase\">구간</th><th scope=\"col\" data-copy=\"allocation\">배정량(NOWMS)</th><th scope=\"col\" data-copy=\"points\">NOWMS 1개당 적립 코인</th></tr>\n        </thead>\n        <tbody>\n          <tr><th scope=\"row\">1</th><td>20,000,000</td><td>1</td></tr>\n          <tr><th scope=\"row\">2</th><td>20,000,000</td><td>10</td></tr>\n          <tr><th scope=\"row\">3</th><td>15,000,000</td><td>100</td></tr>\n          <tr><th scope=\"row\">4</th><td>15,000,000</td><td>1,000</td></tr>\n          <tr><th scope=\"row\">5</th><td>10,000,000</td><td>10,000</td></tr>\n        </tbody>\n      </table>\n      <p data-copy=\"longTerm\">5차의 마지막 1천만 NOWMS는 장기 교환용으로 배정할 계획입니다.</p>\n    </div>\n    <div aria-labelledby=\"nowms-notice-use\">\n      <h3 id=\"nowms-notice-use\" data-copy=\"use\">사용처 및 거래소 상장</h3>\n      <p data-copy=\"useTiming\">NOWMS 사용처와 거래소 상장 여부는 추후 결정합니다.</p>\n    </div>";

  const style = document.createElement('style');
  style.textContent = "#nowms-issuance-notice { background: #fffefa; border: 1px solid #d9e7dc; border-radius: 16px; margin: 16px 0; padding: 14px; color: #263d36; }\n#nowms-issuance-notice > summary { cursor: pointer; font-weight: 750; overflow-wrap: anywhere; }\n#nowms-issuance-notice > div { border-top: 1px solid #e2e8de; margin-top: 14px; padding-top: 12px; }\n#nowms-issuance-notice .hero { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }\n#nowms-issuance-notice .hero > div { flex: 1 1 12rem; }\n#nowms-issuance-notice img { width: 52px; height: 52px; object-fit: contain; }\n#nowms-issuance-notice h3, #nowms-issuance-notice p { margin: 0; overflow-wrap: anywhere; }\n#nowms-issuance-notice p { margin-top: 6px; }\n#nowms-issuance-notice .status { display: block; padding: 0; background: transparent; color: #355a48; font-weight: 700; }\n#nowms-issuance-notice dl { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 8rem), 1fr)); gap: 8px 12px; margin: 10px 0; }\n#nowms-issuance-notice dd { margin: 0; font-weight: 700; }\n#nowms-issuance-notice table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: .875rem; font-variant-numeric: tabular-nums; }\n#nowms-issuance-notice th, #nowms-issuance-notice td { padding: 6px 3px; border-bottom: 1px solid #e2e8de; text-align: right; }\n#nowms-issuance-notice th:first-child { text-align: left; }";
  document.head.append(style);
  const history = document.getElementById('history');
  const historyCard = history?.closest('.card');
  if (historyCard?.parentElement === wallet) wallet.insertBefore(notice, historyCard);
  else wallet.append(notice);

  const language = document.getElementById('language');
  const summary = notice.querySelector('summary');
  const fields = Array.from(notice.querySelectorAll('[data-copy]'), element => ({
    element,
    key: element.dataset.copy,
    korean: element.textContent
  }));

  function translate() {
    const selected = language?.value || 'ko';
    summary.textContent = titles[selected] || titles.ko;
    for (const { element, key, korean } of fields) {
      element.textContent = translations[selected]?.[key] ?? korean;
    }
  }

  function openFromLink() {
    if (location.hash !== '#' + notice.id) return;
    document.querySelector('[data-page="wallet"]')?.click();
    notice.open = true;
    requestAnimationFrame(() => notice.scrollIntoView({ block: 'start' }));
  }

  language?.addEventListener('change', translate);
  window.addEventListener('hashchange', openFromLink);
  translate();
  openFromLink();
})();
