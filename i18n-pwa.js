/* Textos propios de la versión web/móvil (se suman a i18n.js) */
(function () {
  const X = {
    en: {
      helpPwa: 'COMMANDS:\n/key <key> · connect the AI\n/city <city> · for the weather\n/model <id> · change model\n/language <code> · language\n/sound on|off · read replies aloud\n/web on|off · web search\n/task <text> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · what I remember\n/new · restart chat\n/forgetall · erase memory\n\nAttach a photo or text file with the paperclip. For everything else, just talk to me.',
      keyUsage: "Usage: /key sk-ant-... (stored on this device only, not encrypted: don't use it on a shared phone).",
      keySaved: 'Key saved on this device. Brain connected.',
      tipFloat: 'Floating window', tipAvatar: 'Change avatar', tipSound: 'Read aloud', tipAttach: 'Attach photo or file',
      attachBad: 'Only photos and text files (.txt, .md, .csv, .json) up to 200 KB.',
      soundOn: 'Voice on.', soundOff: 'Voice off.',
      floatNo: "This browser can't open a floating window. Chrome on a computer or Chromebook can.",
      floatingNote: 'Capri is floating in her own window. Close it to bring her back.',
      installHint: 'To install: tap Share, then "Add to Home Screen".'
    },
    es: {
      helpPwa: 'COMANDOS:\n/clave <clave> · conecta la IA\n/ciudad <ciudad> · para el clima\n/modelo <id> · cambia de modelo\n/idioma <código> · idioma\n/voz on|off · lee las respuestas en voz alta\n/web on|off · búsqueda web\n/tarea <texto> · /tareas · /hecho <n>\n/tema rosa|cian|amarillo|capri\n/memoria · lo que recuerdo\n/nueva · reinicia la charla\n/olvidatodo · borra la memoria\n\nAdjunta una foto o un archivo de texto con el clip. Para lo demás, háblame normal.',
      keyUsage: 'Uso: /clave sk-ant-... (se guarda solo en este dispositivo, sin cifrar: no la uses en un móvil compartido).',
      keySaved: 'Clave guardada en este dispositivo. Cerebro conectado.',
      tipFloat: 'Ventana flotante', tipAvatar: 'Cambiar avatar', tipSound: 'Leer en voz alta', tipAttach: 'Adjuntar foto o archivo',
      attachBad: 'Solo fotos y archivos de texto (.txt, .md, .csv, .json) de hasta 200 KB.',
      soundOn: 'Voz activada.', soundOff: 'Voz desactivada.',
      floatNo: 'Este navegador no puede abrir una ventana flotante. Chrome en ordenador o Chromebook sí.',
      floatingNote: 'Capri está flotando en su propia ventana. Ciérrala para traerla de vuelta.',
      installHint: 'Para instalarla: toca Compartir y luego "Añadir a pantalla de inicio".'
    },
    de: {
      helpPwa: 'BEFEHLE:\n/key <Schlüssel> · KI verbinden\n/city <Stadt> · für das Wetter\n/model <id> · Modell wechseln\n/language <Code> · Sprache\n/sound on|off · Antworten vorlesen\n/web on|off · Websuche\n/task <Text> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · woran ich mich erinnere\n/new · Unterhaltung neu starten\n/forgetall · Gedächtnis löschen\n\nHänge mit der Büroklammer ein Foto oder eine Textdatei an. Für alles andere sprich einfach mit mir.',
      keyUsage: 'Nutzung: /key sk-ant-... (wird nur auf diesem Gerät gespeichert, unverschlüsselt: nicht auf einem geteilten Handy verwenden).',
      keySaved: 'Schlüssel auf diesem Gerät gespeichert. Gehirn verbunden.',
      tipFloat: 'Schwebendes Fenster', tipAvatar: 'Avatar ändern', tipSound: 'Vorlesen', tipAttach: 'Foto oder Datei anhängen',
      attachBad: 'Nur Fotos und Textdateien (.txt, .md, .csv, .json) bis 200 KB.',
      soundOn: 'Stimme an.', soundOff: 'Stimme aus.',
      floatNo: 'Dieser Browser kann kein schwebendes Fenster öffnen. Chrome am Computer oder Chromebook kann das.',
      floatingNote: 'Capri schwebt in einem eigenen Fenster. Schließ es, um sie zurückzuholen.',
      installHint: 'Zum Installieren: Tippe auf Teilen und dann „Zum Home-Bildschirm“.'
    },
    fr: {
      helpPwa: "COMMANDES :\n/key <clé> · connecter l'IA\n/city <ville> · pour la météo\n/model <id> · changer de modèle\n/language <code> · langue\n/sound on|off · lire les réponses à voix haute\n/web on|off · recherche web\n/task <texte> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · ce dont je me souviens\n/new · relancer la discussion\n/forgetall · effacer la mémoire\n\nJoins une photo ou un fichier texte avec le trombone. Pour le reste, parle-moi simplement.",
      keyUsage: "Usage : /key sk-ant-... (stockée uniquement sur cet appareil, non chiffrée : ne l'utilise pas sur un téléphone partagé).",
      keySaved: 'Clé enregistrée sur cet appareil. Cerveau connecté.',
      tipFloat: 'Fenêtre flottante', tipAvatar: "Changer d'avatar", tipSound: 'Lire à voix haute', tipAttach: 'Joindre une photo ou un fichier',
      attachBad: "Uniquement des photos et des fichiers texte (.txt, .md, .csv, .json) jusqu'à 200 Ko.",
      soundOn: 'Voix activée.', soundOff: 'Voix désactivée.',
      floatNo: 'Ce navigateur ne peut pas ouvrir de fenêtre flottante. Chrome sur ordinateur ou Chromebook le peut.',
      floatingNote: 'Capri flotte dans sa propre fenêtre. Ferme-la pour la ramener.',
      installHint: "Pour l'installer : touche Partager, puis « Sur l'écran d'accueil »."
    },
    pt: {
      helpPwa: 'COMANDOS:\n/key <chave> · conecta a IA\n/city <cidade> · para o clima\n/model <id> · muda de modelo\n/language <código> · idioma\n/sound on|off · ler as respostas em voz alta\n/web on|off · busca na web\n/task <texto> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · o que eu lembro\n/new · reinicia a conversa\n/forgetall · apaga a memória\n\nAnexe uma foto ou um arquivo de texto com o clipe. Para o resto, é só falar comigo.',
      keyUsage: 'Uso: /key sk-ant-... (guardada só neste dispositivo, sem criptografia: não use em um celular compartilhado).',
      keySaved: 'Chave salva neste dispositivo. Cérebro conectado.',
      tipFloat: 'Janela flutuante', tipAvatar: 'Trocar avatar', tipSound: 'Ler em voz alta', tipAttach: 'Anexar foto ou arquivo',
      attachBad: 'Apenas fotos e arquivos de texto (.txt, .md, .csv, .json) de até 200 KB.',
      soundOn: 'Voz ativada.', soundOff: 'Voz desativada.',
      floatNo: 'Este navegador não consegue abrir uma janela flutuante. O Chrome no computador ou Chromebook consegue.',
      floatingNote: 'A Capri está flutuando em uma janela própria. Feche-a para trazê-la de volta.',
      installHint: 'Para instalar: toque em Compartilhar e depois em "Adicionar à Tela de Início".'
    },
    ru: {
      helpPwa: 'КОМАНДЫ:\n/key <ключ> · подключить ИИ\n/city <город> · для погоды\n/model <id> · сменить модель\n/language <код> · язык\n/sound on|off · читать ответы вслух\n/web on|off · поиск в интернете\n/task <текст> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · что я помню\n/new · начать разговор заново\n/forgetall · стереть память\n\nПрикрепи фото или текстовый файл скрепкой. Всё остальное — просто говори со мной.',
      keyUsage: 'Использование: /key sk-ant-... (хранится только на этом устройстве, без шифрования: не используй на общем телефоне).',
      keySaved: 'Ключ сохранён на этом устройстве. Мозг подключён.',
      tipFloat: 'Плавающее окно', tipAvatar: 'Сменить аватар', tipSound: 'Читать вслух', tipAttach: 'Прикрепить фото или файл',
      attachBad: 'Только фото и текстовые файлы (.txt, .md, .csv, .json) до 200 КБ.',
      soundOn: 'Голос включён.', soundOff: 'Голос выключен.',
      floatNo: 'Этот браузер не может открыть плавающее окно. Chrome на компьютере или Chromebook может.',
      floatingNote: 'Capri парит в отдельном окне. Закрой его, чтобы вернуть её.',
      installHint: 'Чтобы установить: нажми «Поделиться», затем «На экран “Домой”».'
    },
    zh: {
      helpPwa: '命令：\n/key <密钥> · 连接 AI\n/city <城市> · 用于天气\n/model <id> · 切换模型\n/language <代码> · 语言\n/sound on|off · 朗读回复\n/web on|off · 联网搜索\n/task <内容> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · 我记得什么\n/new · 重新开始对话\n/forgetall · 清除记忆\n\n用回形针可附加照片或文本文件。其他的，直接跟我说话就行。',
      keyUsage: '用法：/key sk-ant-...（仅保存在此设备上，未加密：请勿在共用手机上使用）。',
      keySaved: '密钥已保存在此设备上，大脑已连接。',
      tipFloat: '悬浮窗口', tipAvatar: '更换头像', tipSound: '朗读', tipAttach: '附加照片或文件',
      attachBad: '仅支持照片和文本文件（.txt、.md、.csv、.json），最大 200 KB。',
      soundOn: '语音已开启。', soundOff: '语音已关闭。',
      floatNo: '此浏览器无法打开悬浮窗口。电脑或 Chromebook 上的 Chrome 可以。',
      floatingNote: 'Capri 正在独立窗口中悬浮。关闭该窗口即可把她请回来。',
      installHint: '安装方法：点按“分享”，然后选择“添加到主屏幕”。'
    },
    ja: {
      helpPwa: 'コマンド:\n/key <キー> · AI を接続\n/city <都市> · 天気用\n/model <id> · モデル変更\n/language <コード> · 言語\n/sound on|off · 返信を読み上げ\n/web on|off · ウェブ検索\n/task <内容> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · 覚えていること\n/new · 会話をやり直す\n/forgetall · 記憶を消す\n\nクリップのアイコンで写真やテキストファイルを添付できます。それ以外は、普通に話しかけてね。',
      keyUsage: '使い方: /key sk-ant-...（この端末にのみ、暗号化なしで保存されます。共有のスマホでは使わないでね）。',
      keySaved: 'この端末にキーを保存しました。頭脳がつながったよ。',
      tipFloat: 'フローティングウィンドウ', tipAvatar: 'アバターを変更', tipSound: '読み上げ', tipAttach: '写真やファイルを添付',
      attachBad: '写真とテキストファイル（.txt、.md、.csv、.json）のみ、200 KB まで。',
      soundOn: '音声オン。', soundOff: '音声オフ。',
      floatNo: 'このブラウザではフローティングウィンドウを開けません。パソコンや Chromebook の Chrome なら開けます。',
      floatingNote: 'Capri は専用ウィンドウで浮かんでいます。閉じると戻ってきます。',
      installHint: 'インストール方法: 共有をタップして「ホーム画面に追加」を選んでね。'
    },
    ar: {
      helpPwa: 'الأوامر:\n/key <المفتاح> · توصيل الذكاء الاصطناعي\n/city <المدينة> · للطقس\n/model <id> · تغيير النموذج\n/language <الرمز> · اللغة\n/sound on|off · قراءة الردود بصوت عالٍ\n/web on|off · البحث في الويب\n/task <النص> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · ما أتذكره\n/new · إعادة بدء المحادثة\n/forgetall · مسح الذاكرة\n\nأرفق صورة أو ملفاً نصياً بمشبك الورق. أما الباقي فتحدّث معي ببساطة.',
      keyUsage: 'الاستخدام: /key sk-ant-... (يُحفظ على هذا الجهاز فقط وبدون تشفير: لا تستخدمه على هاتف مشترك).',
      keySaved: 'تم حفظ المفتاح على هذا الجهاز. تم توصيل العقل.',
      tipFloat: 'نافذة عائمة', tipAvatar: 'تغيير الصورة الرمزية', tipSound: 'قراءة بصوت عالٍ', tipAttach: 'إرفاق صورة أو ملف',
      attachBad: 'الصور والملفات النصية فقط (.txt و.md و.csv و.json) حتى 200 كيلوبايت.',
      soundOn: 'تم تشغيل الصوت.', soundOff: 'تم إيقاف الصوت.',
      floatNo: 'لا يستطيع هذا المتصفح فتح نافذة عائمة. يستطيع Chrome على الكمبيوتر أو Chromebook ذلك.',
      floatingNote: 'Capri عائمة في نافذتها الخاصة. أغلقها لإعادتها.',
      installHint: 'للتثبيت: اضغط على «مشاركة» ثم «إضافة إلى الشاشة الرئيسية».'
    },
    hi: {
      helpPwa: 'कमांड:\n/key <कुंजी> · AI जोड़ें\n/city <शहर> · मौसम के लिए\n/model <id> · मॉडल बदलें\n/language <कोड> · भाषा\n/sound on|off · जवाब ज़ोर से पढ़ें\n/web on|off · वेब खोज\n/task <टेक्स्ट> · /tasks · /done <n>\n/theme pink|cyan|yellow|capri\n/memory · मुझे क्या याद है\n/new · बातचीत फिर से शुरू करें\n/forgetall · याददाश्त मिटाएँ\n\nपेपरक्लिप से फ़ोटो या टेक्स्ट फ़ाइल जोड़ें। बाकी सब के लिए बस मुझसे बात करें।',
      keyUsage: 'इस्तेमाल: /key sk-ant-... (सिर्फ़ इसी डिवाइस पर, बिना एन्क्रिप्शन के सहेजी जाती है: साझा फ़ोन पर इस्तेमाल न करें)।',
      keySaved: 'कुंजी इस डिवाइस पर सहेज ली गई। दिमाग जुड़ गया।',
      tipFloat: 'फ़्लोटिंग विंडो', tipAvatar: 'अवतार बदलें', tipSound: 'ज़ोर से पढ़ें', tipAttach: 'फ़ोटो या फ़ाइल जोड़ें',
      attachBad: 'सिर्फ़ फ़ोटो और टेक्स्ट फ़ाइलें (.txt, .md, .csv, .json), 200 KB तक।',
      soundOn: 'आवाज़ चालू।', soundOff: 'आवाज़ बंद।',
      floatNo: 'यह ब्राउज़र फ़्लोटिंग विंडो नहीं खोल सकता। कंप्यूटर या Chromebook पर Chrome खोल सकता है।',
      floatingNote: 'Capri अपनी अलग विंडो में तैर रही है। उसे वापस लाने के लिए विंडो बंद करें।',
      installHint: 'इंस्टॉल करने के लिए: शेयर पर टैप करें, फिर "होम स्क्रीन में जोड़ें"।'
    }
  };
  for (const l of Object.keys(X)) window.CapriI18n.extend(l, X[l]);
})();

/* Textos de búsqueda web y fuentes */
(function () {
  const Y = {
    en: { searching: 'Searching the web...', sources: 'Sources', webOn: 'Web search on.', webOff: 'Web search off.',
      webFail: "Web search isn't enabled on your Anthropic account, so I turned it off. You can enable it in your Anthropic Console settings." },
    es: { searching: 'Buscando en la web...', sources: 'Fuentes', webOn: 'Búsqueda web activada.', webOff: 'Búsqueda web desactivada.',
      webFail: 'La búsqueda web no está activada en tu cuenta de Anthropic, así que la he desactivado. Puedes activarla en los ajustes de tu consola de Anthropic.' },
    de: { searching: 'Ich suche im Web...', sources: 'Quellen', webOn: 'Websuche an.', webOff: 'Websuche aus.',
      webFail: 'Die Websuche ist in deinem Anthropic-Konto nicht aktiviert, deshalb habe ich sie ausgeschaltet. Du kannst sie in den Einstellungen deiner Anthropic-Konsole aktivieren.' },
    fr: { searching: 'Recherche sur le web...', sources: 'Sources', webOn: 'Recherche web activée.', webOff: 'Recherche web désactivée.',
      webFail: "La recherche web n'est pas activée sur ton compte Anthropic, je l'ai donc désactivée. Tu peux l'activer dans les paramètres de ta console Anthropic." },
    pt: { searching: 'Pesquisando na web...', sources: 'Fontes', webOn: 'Busca na web ativada.', webOff: 'Busca na web desativada.',
      webFail: 'A busca na web não está ativada na sua conta Anthropic, então eu a desativei. Você pode ativá-la nas configurações do seu console Anthropic.' },
    ru: { searching: 'Ищу в интернете...', sources: 'Источники', webOn: 'Поиск в интернете включён.', webOff: 'Поиск в интернете выключен.',
      webFail: 'Поиск в интернете не включён в твоём аккаунте Anthropic, поэтому я его выключила. Его можно включить в настройках консоли Anthropic.' },
    zh: { searching: '正在联网搜索……', sources: '来源', webOn: '联网搜索已开启。', webOff: '联网搜索已关闭。',
      webFail: '你的 Anthropic 账号未启用联网搜索，所以我已将它关闭。你可以在 Anthropic 控制台设置中启用。' },
    ja: { searching: 'ウェブを検索しています...', sources: '情報源', webOn: 'ウェブ検索オン。', webOff: 'ウェブ検索オフ。',
      webFail: 'Anthropic アカウントでウェブ検索が有効になっていないため、オフにしました。Anthropic コンソールの設定で有効にできます。' },
    ar: { searching: 'أبحث في الويب...', sources: 'المصادر', webOn: 'تم تشغيل البحث في الويب.', webOff: 'تم إيقاف البحث في الويب.',
      webFail: 'البحث في الويب غير مفعّل في حسابك على Anthropic، لذلك أوقفته. يمكنك تفعيله من إعدادات وحدة تحكم Anthropic.' },
    hi: { searching: 'वेब पर खोज रही हूँ...', sources: 'स्रोत', webOn: 'वेब खोज चालू।', webOff: 'वेब खोज बंद।',
      webFail: 'आपके Anthropic खाते में वेब खोज चालू नहीं है, इसलिए मैंने इसे बंद कर दिया। आप इसे Anthropic कंसोल की सेटिंग में चालू कर सकते हैं।' }
  };
  for (const l of Object.keys(Y)) window.CapriI18n.extend(l, Y[l]);
})();
