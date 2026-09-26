const guides={pechi:{name:'ふわペチ',hello:'むずかしく考えなくて大丈夫。一緒にひとつずつ見るだふわ！',line:'まずは、小さなひと工夫からだふわ。'},kuro:{name:'クロ',hello:'確認させてくれ。知っておけば、安心して使えるコツがある。',line:'しくみを知ると、確認するポイントが見えてくる。'},kuromi:{name:'クロミ姐さん',hello:'便利に使うために、守るコツも覚えていくわよ。',line:'大切な情報は、あなたが守ってあげるのよ。'}};
const lessons=[
  {
    "tag": "すべての利用者へ",
    "id": "input",
    "title": "この情報、AIに入れていい？",
    "sub": "必要な情報だけを、適切に扱う。",
    "text": "個人情報や社外秘情報を扱うときは、目的に必要か、利用するAIサービスで扱ってよいかを確認します。情報を一切入れないのではなく、必要な情報に絞り、利用条件と社内ルールに沿って活用しましょう。",
    "example": "議事録を要約する場合：要約に不要な氏名・住所・電話番号を削除し、必要に応じて「A社」「担当者A」に置き換えます。仕事内容や決定事項など、要約に必要で、入力が認められている情報は残します。",
    "action": "① 入力の目的と、必要な情報を確認する。\n② 不要な名前・住所・電話番号を削除する。\n③ 必要に応じて一般的な表現に置き換える。\n④ 会社の情報は、利用できるAIサービスと入力してよいデータの範囲を社内ルールで確認する。",
    "more": "匿名化とは、個人がわからない形に情報を加工することです。名前を変えるだけでは、日時・場所・出来事の組み合わせから個人がわかる場合があります。添付ファイルや画像にも不要な情報がないか確認してください。判断がつかない部分だけを担当者に確認すれば、作業全体を止める必要はありません。",
    "checks": [
      "入力する情報が目的に必要か確認した",
      "不要な個人情報を削除・置き換えた、または必要な扱いを確認した",
      "仕事の情報は社内ルールを確認した（仕事の情報を扱わない場合は対象外）"
    ],
    "q": "業務の資料をAIで要約したいとき、適切なのは？",
    "choices": [
      "目的・利用条件・社内ルールを確認し、必要な情報に絞る",
      "仕事の情報は一切AIに入力できない"
    ],
    "correct": 0,
    "feedback": "必要な情報を適切に扱うことが基本です。",
    "kuromi": "必要な情報まで捨てなくていいの。何を渡すか、選んで使いましょう。"
  },
  {
    "tag": "すべての利用者へ",
    "id": "setting",
    "title": "会話を学習に使わせない設定は？",
    "sub": "利用するサービスの設定を確認する。",
    "text": "モデル改善への利用とは、会話などをAIの性能向上や学習に使うことです。個人向けアカウントで利用を控えたい場合は、次の設定を確認します。",
    "example": "ChatGPT：アカウントメニュー → 設定 → データコントロール →「すべての人のためにモデルを改善する（Improve the model for everyone）」をオフ。\n\nGemini：設定とヘルプ → アクティビティ →「アクティビティの保存」の「オン」→「オフにする」。\n\nClaude：アカウントの名前 → 設定 → プライバシー →「AIモデルの改善に協力する（Help Improve our AI models）」をオフ。\n\nGrok（grok.com）：Settings → Data →「Improve the Model」をオフ。Grokアプリ：Settings → Data Controls →「Improve the model」をオフ。X内で使うGrokは、X側のデータ共有設定も別に確認します。",
    "action": "利用中のサービスとアカウントで、モデル改善への利用設定を確認し、必要なら変更してください。\n\n設定名や場所は変更されることがあります。見つからない場合は各サービスの最新ヘルプを確認してください。公式ヘルプのリンクはページ下部にあります。",
    "more": "■ 4つの設定は別のものです\nモデル改善への利用：会話をAIの学習・性能向上に使うか。\nチャット履歴：過去の会話を保存し、後で見返すための記録。\nメモリ：好みや前提などを覚え、別の会話でも応答を調整する機能。\n一時チャット：通常の履歴などに残さず会話するモード。対応や保存期間はサービスごとに異なります。\n\n学習をオフにしても、履歴やメモリがすべて消えるわけではありません。削除したい場合は、それぞれの設定を確認します。\n\nChatGPTは評価などのフィードバックに関連する会話が学習に使われる場合があります。Geminiはアクティビティ保存がオフでも最長72時間会話を保存します。Claudeも安全対策などの例外があります。GrokとXの設定は別のため、両方を使う場合はそれぞれ確認してください。仕事・学校向けアカウントは契約や管理者設定に従います。",
    "checks": [
      "利用しているサービスのモデル改善設定を確認した",
      "必要な変更を行った、または契約・管理者による扱いを確認した",
      "学習設定と履歴・メモリ・一時チャットの違いを理解した"
    ],
    "q": "学習をオフにすると、履歴とメモリはどうなりますか？",
    "choices": [
      "すべて自動で消える",
      "別の設定なので、必要に応じて個別に確認する"
    ],
    "correct": 1,
    "feedback": "学習利用の設定と、履歴・メモリの管理は別です。",
    "kuromi": "学習オフと、履歴の削除は別の話。必要な設定だけ、きちんと押さえましょう。"
  },
  {
    "id": "permission",
    "tag": "AIに操作を頼む人へ",
    "title": "AIに、どこまでおまかせする？",
    "sub": "任せる範囲を決め、重要な操作は確認する。",
    "text": "AIエージェントとは、指示を受けてファイル整理やアプリ操作などを進めるAIです。任せる場所と作業を決めれば、便利に活用できます。まずは練習用フォルダで、どのように操作するか確かめましょう。",
    "example": "「この練習用フォルダだけを対象に、整理案を出してください。削除・上書き・外部送信・公開・料金が発生する操作は、対象と内容を提示し、確認を受けてから実行してください。」",
    "action": "① 対象フォルダ・接続するサービス・作業範囲を決める。\n② 大事なデータをコピーし、練習用フォルダで試す。\n③ 削除・上書き・外部への送信・公開・購入などは、対象、送信先、公開範囲、金額を実行前に確認する。\n④ 操作後の結果と記録を確認する。",
    "more": "権限とは、AIが見たり変更したりできる範囲です。設定で制限できる場合は、作業に必要な範囲に絞ります。操作ログは「何をしたか」の記録です。全部を人が操作する必要はありませんが、元に戻しにくい操作や影響の大きい操作は人が判断します。指示文だけでは制限を保証できないため、利用ツールの権限や確認設定も活用してください。",
    "checks": [
      "作業対象と権限の範囲を決めた（操作するAIを使わない場合は対象外）",
      "練習用フォルダやコピーで試す準備をした",
      "重要な操作を実行前に確認する方法を決めた"
    ],
    "q": "AIに任せるときの基本は？",
    "choices": [
      "任せる範囲を決め、重要な操作を人が確認する",
      "何も任せないようにする"
    ],
    "correct": 0,
    "feedback": "日常の作業は任せ、影響の大きい判断を確認するのが実用的です。",
    "kuromi": "全部任せる必要なんてないのよ。大事な操作だけは、あなたが確認してね。"
  },
  {
    "id": "package",
    "tag": "アプリを作る人へ",
    "title": "「これを入れて」と言われたら？",
    "sub": "外部パッケージは、導入前にひと確認。",
    "text": "外部パッケージとは、他の人が作った機能をアプリに追加するプログラムのまとまりです。開発を効率化できますが、AIが示す名前が誤っていたり、似た名前の別物が混ざったりすることがあります。",
    "example": "例：npm install パッケージ名\n「npm」はJavaScriptのパッケージを管理する道具、「install」は導入する操作です。AIが示す命令と、開発元の公式サイトや公式GitHubに載っている導入手順を、文字単位で見比べます。",
    "action": "① 何の機能のために必要か、AIに説明してもらう。\n② 開発元の公式サイトから配布ページに進み、パッケージ名・作者・リンク先が一致するか確認する。検索結果の先頭というだけで決めない。\n③ 命令に削除や外部送信など別の操作が含まれていないか、説明を求める。\n④ 確認できない場合は、その部分を詳しい人に確認してから導入する。",
    "more": "npmなどの配布サイトでは、説明・作者・公式リポジトリへのリンク・更新履歴を確認できます。利用数が多いことだけで安全と判断しないでください。\n\nAikido Safe Chainは、npmなどで外部パッケージをインストールするときに、安全性のチェックを一段追加できる仕組みです。対応する命令や環境は公式の導入案内で確認します。\n\nSafe Chainは複数ある対策の一つで、完全な安全を保証するものではありません。必要性の確認、公式手順との照合、チェックツールを組み合わせましょう。",
    "checks": [
      "追加する目的と命令の意味を確認した（導入しない場合は対象外）",
      "公式の導入手順とパッケージ名・配布元を照合した",
      "不明点を確認し、必要に応じて安全確認ツールを利用する方針を決めた"
    ],
    "q": "知らないパッケージをAIがすすめたら？",
    "choices": [
      "名前が有名なものに似ていれば導入する",
      "目的と公式の導入手順を確認する"
    ],
    "correct": 1,
    "feedback": "具体的な名前と手順を照合し、不明な部分だけ確認すれば進められます。",
    "kuromi": "知らないものを、勢いで家に上げちゃダメ。まずは出どころを確かめましょう。"
  },
  {
    "id": "key",
    "tag": "アプリを作る人へ",
    "title": "APIキーとは？ なぜ秘密にする？",
    "sub": "利用権限と料金に関わる認証情報。",
    "text": "APIは、アプリからAIなどのサービスに処理を依頼するための窓口です。APIキーは、利用者を確認して利用を許可する秘密の文字列で、パスワードに近い認証情報です。通常のチャット画面では不要でも、自作アプリや外部ツールの接続で使うことがあります。",
    "example": "自作アプリ → APIキーで利用を認証 → AIサービスに依頼 → 回答が返る。\n\nAPIキーが漏れると、他人があなたの契約でAIを大量に利用し、多額の請求がくることがあります。必要な権限に絞り、利用履歴と料金も確認しましょう。",
    "action": "■ 保存する場所\n・コードに直接書かない。\n・ローカル開発では .env などから環境変数として読み込む。\n・.env を .gitignore の対象にして、GitHubへ送らない。\n・VercelやNetlifyでは Environment Variables／Secretなど、サーバー側の設定で管理する。\n\n■ GitHubで確認すること\nリポジトリの Settings → Security関連の設定で、Secret scanning／Push protectionの利用可否と有効状態を確認する。設定名・利用条件は契約や公開範囲によって異なります。\n\n■ 漏れたときの基本対応\n① 漏れたキーをサービス側で無効化する。\n② 新しいキーを発行する。\n③ 利用しているアプリ・環境のキーを交換する。\n④ 利用履歴・請求状況を確認し、不審な利用はサポートに連絡する。",
    "more": "環境変数は、プログラムの外で値を渡す設定です。.envはローカル開発でその値を保存するファイル、.gitignoreはGitの共有対象から外すファイル名などを指定する設定です。すでにGitで記録済みの.envは、.gitignoreに追加するだけでは外れません。共有対象から外れたことを確認してください。\n\nSecret scanningは、GitHub上のAPIキーなどを検知する仕組みです。Push protectionは、対応する秘密情報をpush（GitHubへ送信）する際に検知し、送信を止める仕組みです。すべてのキーを検知できるわけではなく、最後の防御の一つです。\n\n環境変数に保存しても、ブラウザへ送るコードに埋め込むと公開されます。サーバー側だけで使い、NEXT_PUBLIC_やVITE_など公開される変数には秘密のキーを入れないでください。利用上限・通知も補助になりますが、通知だけでは利用が止まらない場合があります。漏えい時は画像やコードを削除するだけでは終わりません。",
    "checks": [
      "コードやブラウザ側にキーが入っていないことを確認した（APIを使わない場合は対象外）",
      "保存先と.envの共有除外を確認した",
      "GitHubの漏えい対策の利用可否と、キーの無効化・交換方法を確認した"
    ],
    "q": "APIキーが公開された場合の対応は？",
    "choices": [
      "投稿を削除すれば終わり",
      "無効化・再発行・アプリのキー交換・利用と請求の確認を行う"
    ],
    "correct": 1,
    "feedback": "漏れたキーを使えなくし、交換後のアプリも確認します。",
    "kuromi": "その鍵、誰にでも見せちゃダメよ。保管場所と、交換の手順を押さえておきましょう。"
  }
];
let selected='pechi';const done=new Set();const skipped=new Set();const $=s=>document.querySelector(s);const dialog=$('#lesson');let active=null;
function setGuide(key){selected=key;document.querySelectorAll('[data-guide]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.guide===key)));$('#greeting').replaceChildren();const n=document.createElement('strong');n.textContent=guides[key].name;$('#greeting').append(n,document.createTextNode(guides[key].hello));}
document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>setGuide(b.dataset.guide)));
function render(){document.querySelector('#manabibaReturn').hidden=done.size!==lessons.length;const root=$('#cards');root.replaceChildren();lessons.forEach((l,i)=>{const b=document.createElement('button');b.className='card'+(done.has(l.id)?' done':'');b.style.setProperty('--accent',['#ffcc64','#58c6c2','#ef90b0'][i%3]);b.innerHTML=`<span class="number">${String(i+1).padStart(2,'0')} · ${l.tag}</span><h3>${l.title}</h3><p>${l.sub}</p><span class="read">${done.has(l.id)?(skipped.has(l.id)?'✓ 対象外として確認':'✓ 基本チェック完了'):'詳しく読む'}<span aria-hidden="true">↗</span></span>`;b.onclick=()=>openLesson(l);root.append(b)});$('#completionText').textContent=done.size===lessons.length?'基本チェック完了。ここまで確認できたら、まずはOKです。必要な対策をしたうえで、AIを便利に使っていきましょう。サービスや使い方を変えたときに、関係する項目を見直せば大丈夫です。':`基本チェック ${done.size} / ${lessons.length} 項目。自分の環境を確認し、必要な対策ができたら完了にできます。使わない機能は「現在は対象外」で進められます。`;}
function openLesson(l){active=l;$('#lessonLabel').textContent=l.tag;$('#dialogTitle').textContent=l.title;$('#mentorImage').src=`assets/${selected}.png`;$('#mentorImage').alt=guides[selected].name;$('#mentorLine').textContent=selected==='kuromi'?l.kuromi:guides[selected].line;$('#explanation').textContent=l.text;$('#example').textContent=l.example;$('#action').textContent=l.action;$('#more').textContent=l.more;$('#question').textContent=l.q;$('#feedback').textContent='';$('#checklist').replaceChildren();$('#finish').disabled=true;$('#skip').hidden=l.tag==='すべての利用者へ';l.checks.forEach(t=>{const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.onchange=()=>{$('#finish').disabled=![...document.querySelectorAll('#checklist input')].every(c=>c.checked)};label.append(input,document.createTextNode(t));$('#checklist').append(label)});$('#answers').replaceChildren();dialog.querySelectorAll('details').forEach(d=>d.open=false);l.choices.forEach((c,i)=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{document.querySelectorAll('#answers button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');$('#feedback').textContent=(i===l.correct?'正解です。 ':'ポイントを確認しましょう。 ')+l.feedback};$('#answers').append(b)});dialog.showModal();dialog.scrollTop=0;}
$('#close').onclick=()=>dialog.close();$('#finish').onclick=()=>{if($('#finish').disabled)return;done.add(active.id);skipped.delete(active.id);dialog.close();render()};$('#skip').onclick=()=>{done.add(active.id);skipped.add(active.id);dialog.close();render()};dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});setGuide('pechi');render();


