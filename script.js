/* ═══════════════════════════════════════════════
   CHARGE — site davranışı
   Bölümler: i18n · yıldız alanı · nav · reveal
             sayaçlar · görev profili · alt sistemler
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────────────────────── i18n ───────────────────────── */

  var I18N = {
    tr: {
      'skip': 'İçeriğe geç',

      'nav.about': 'Biz Kimiz', 'nav.sat': 'Uydumuz', 'nav.mission': 'Görev Profili',
      'nav.record': 'Uçuş Kaydı', 'nav.goals': 'Hedefler', 'nav.sponsor': 'Sponsorluk',
      'nav.contact': 'İletişim',

      'hero.eyebrow': 'İstanbul Üniversitesi-Cerrahpaşa · Mühendislik Fakültesi',
      'hero.sub': 'Cerrahpaşa Havacılık ve Ar-Ge Takımı',
      'hero.tag': 'Tasarlıyoruz. Üretiyoruz. Uçuruyoruz.',
      'hero.cta1': 'Uçuş kaydımız',
      'hero.cta2': 'Sponsor olun',

      'status.k1': 'MİSYON', 'status.k2': 'ODAK', 'status.v2': 'MODEL UYDU',
      'status.k3': 'DURUM', 'status.v3': 'HAZIRLIK', 'status.k4': 'KONUM', 'status.k5': 'ETİKET',

      'stat1.k': '2026 CanSat PDR', 'stat1.s': 'Türkiye 3. · Dünya 8.',
      'stat2.k': 'CanSat 2025 finalisti', 'stat2.s': 'Yüzlerce takım arasından',
      'stat3.k': 'TEKNOFEST 2023 katılımcısı', 'stat3.s': 'Finale kalan 80 takımdan biriyiz',
      'stat4.k': 'Mühendislik birimi', 'stat4.s': 'Makine · EEM · Endüstri · Bilgisayar',

      'about.eyebrow': 'Takım',
      'about.title': 'Biz Kimiz?',
      'about.p1': 'CHARGE, İstanbul Üniversitesi-Cerrahpaşa Mühendislik Fakültesi öğrencilerinden oluşan bir havacılık ve Ar-Ge takımıdır. Kendini havacılık, uzay ve savunma sanayi alanında geliştirmek isteyen azimli öğrencilerden kurulu ekibimiz; insansız hava araçları ve model uydu sistemleri üzerine ulusal ve uluslararası yarışmalara hazırlanıyor.',
      'about.p2': '2020’den bu yana her yıl TEKNOFEST finallerinde yer aldık; 2025’te ise CanSat yarışmasıyla ülkemizi ABD’de temsil ettik.',
      'about.d1': 'Makine Mühendisliği', 'about.d2': 'Elektrik-Elektronik Mühendisliği',
      'about.d3': 'Endüstri Mühendisliği', 'about.d4': 'Bilgisayar Mühendisliği',
      'about.img': 'CHARGE takımının ürettiği model uydu ve insansız hava araçları bir tezgâh üzerinde sıralanmış',
      'about.cap': 'Takımın ürettiği model uydu ve İHA sistemleri',

      'quote.text': '“Dik olarak yükselebilen ve havada asılı kalabilen araç fikri, muhtemelen insanoğlunun uçmayı hayal edişiyle aynı zamanda doğmuştur.”',

      'mission.tag': 'Misyonumuz',
      'mission.text': '“Teknoloji üreten bir Türkiye için nitelikli mühendis” olma yolunda edindiğimiz tecrübe, bilgi ve teknolojiyi insanlık yararına sunmak; çağın gerekliliklerini öngörebilen ve ülkesini ileri taşıyan bir mühendis neslinin yetişmesine katkıda bulunmak.',
      'vision.tag': 'Vizyonumuz',
      'vision.text': 'İHA ve model uydu sistemlerinin elektronik, yazılım ve mekanik alt sistemlerini özgün fikirlerle geliştirmek; yerli kumanda, uçuş kontrol kartı, RF ekipmanları ve yer kontrol istasyonunu takımımız bünyesinde üretmek.',

      'sat.eyebrow': 'Sistem',
      'sat.title': 'Model Uydu Nedir?',
      'sat.p1': 'Model uydu (CanSat), gerçek bir uydunun tüm alt sistemlerini — güç, haberleşme, sensörler ve iniş sistemi — küçük bir gövdeye sığdıran bir mühendislik projesidir. Roketle irtifaya çıkarılır, iniş sırasında topladığı verileri yer istasyonuna iletir.',
      'sat.svgtitle': 'Model uydu alt sistemleri şeması',
      'sat.img1': 'Model uydunun iç yapısı: taşıyıcı plaka, karbon çubuklar ve kablolama',
      'sat.img2': 'Takımın kendi tasarladığı yuvarlak baskı devre kartı',
      'sat.img3': 'İki takım üyesi model uydu gövdesini ve taşıyıcı yapısını tutuyor',

      'sub.rec': 'İniş Sistemi',
      'sub.rec.d': 'Paraşüt ve iniş düzeneği; aracın kontrollü ve hasarsız yere ulaşmasını sağlar.',
      'sub.com': 'Haberleşme',
      'sub.com.d': 'Telemetri bağlantısı; iniş boyunca toplanan veriyi yer istasyonuna canlı iletir.',
      'sub.sen': 'Sensörler',
      'sub.sen.d': 'Basınç, sıcaklık, konum ve yönelim verisini görev boyunca ölçer ve kaydeder.',
      'sub.pow': 'Güç',
      'sub.pow.d': 'Batarya ve güç dağıtımı; tüm alt sistemleri görev süresince besler.',

      'uav.tag': 'İHA',
      'uav.text': 'İnsansız Hava Aracı (İHA), içinde pilot bulunmadan uzaktan kumandayla ya da tamamen otonom olarak uçabilen hava aracıdır. Döner kanat (drone) ve sabit kanat olmak üzere farklı tiplerde tasarlanır; arama kurtarma, çevre izleme ve savunma gibi pek çok alanda görev yapar. Takımımız 2020-2023 arasında bu kategorilerde yarıştı.',

      'mis.eyebrow': 'Görev',
      'mis.title': 'Görev Profili',
      'mis.p1': 'Bir model uydu görevi tek bir yörünge üzerinde okunur: roketle yükseliş, apojede ayrılma, kontrollü iniş ve iniş boyunca kesintisiz veri aktarımı.',
      'mis.svgtitle': 'Model uydu görev profili: kalkış, apoje, ayrılma, iniş ve yere temas',
      'wp.1': 'KALKIŞ', 'wp.2': 'APOJE', 'wp.3': 'AYRILMA',
      'wp.4': 'İNİŞ & VERİ AKTARIMI', 'wp.5': 'YERE TEMAS',

      'rec.eyebrow': 'Sicil',
      'rec.title': 'Uçuş Kaydı',
      'rec.cansat.meta': 'Uluslararası Model Uydu Yarışması · Virginia, ABD',
      'rec.cansat.p': 'Her yıl ABD’de düzenlenen uluslararası model uydu yarışmasında 2025’te <b>Auto-Gyro Descender</b> görevine katıldık. Yüzlerce takım arasından <b>finale kalan 41 takımdan biri</b> olarak tüm görevleri yerine getirdik ve yarışma sertifikalarımızı aldık.',

      'sc1.k': '2025 PDR', 'sc1.s': 'Türkiye 1. · Dünya 2.',
      'sc2.k': '2025 CDR', 'sc2.s': 'Türkiye 1.',
      'sc3.k': '2026 PDR', 'sc3.s': 'Türkiye 3. · Dünya 8.',

      'rec.tf.meta': 'Havacılık, Uzay ve Teknoloji Festivali · 2020’den bu yana',
      'tf26.cat': 'Model Uydu',
      'tf26.d': 'Model Uydu Yarışması’nda Ön Tasarım Raporu’ndan 96/100, Kritik Tasarım Raporu’ndan 91/100 puan aldık.',
      'tf23.cat': 'Döner & Sabit Kanat İHA',
      'tf23.g1': 'Döner KTR 92/100', 'tf23.g2': 'Sabit KTR 80/100',
      'tf22.g1': 'Döner KTR 85/100', 'tf22.g3': 'Sabit KTR 83/100',
      'tf23.d': '1060 takım arasından <b>finale kalan 80 takımdan biri</b> olduk ve kendi tasarladığımız sintine suyu temizleme görevini tamamladık. Sabit kanat aracımızda tamamen yerli kumanda ve devre sistemi kullandık.',
      'tf22.cat': 'Döner & Sabit Kanat İHA',
      'tf22.d': 'Döner kanat kategorisinde Detaylı Tasarım Raporu ile <b>4. olduk.</b> Tamamen kompozit üretilen sabit kanat aracımız sergi alanında birçok firmanın ilgisini çekti.',
      'tf21.cat': 'Döner Kanat İHA',
      'tf21.d': '160 takımdan finale kalan 74 takım içinde, iki görevi de tamamlayabilen 14 takımdan biri olarak <b>8. olduk.</b>',
      'tf20.cat': 'Döner Kanat İHA',
      'tf20.d': 'Finale kalan 61 takım arasında <b>8. olduk.</b>',

      'auvsi.meta': 'Student Unmanned Aerial Systems · ABD',
      'auvsi.d': '2026 başvuru sürecini başarıyla tamamladık.',
      'tua.meta': 'Türkiye Uzay Ajansı · Ankara',
      'tua.d': 'İstanbul Avrupa bölgesinde <b>2. olarak</b> ulusal finale kalan 80 takımdan biri olarak küp uydu projemizi Ankara’da jürilere sunduk.',

      'rec.img1': 'Model uydu ve yanında kazanılan ikincilik kupası',
      'rec.img2': 'Takım üyeleri TUA Astro Hackathon sahnesinde',
      'rec.img3': 'Üç takım üyesi kazanılan kupayı birlikte tutuyor',
      'rec.img4': 'Takım araçlarıyla birlikte toplu fotoğrafta',

      'go.eyebrow': 'Yol Haritası',
      'go.title': '2027 Hedeflerimiz',
      'go1.t': 'TEKNOFEST 2027',
      'go1.d': 'Model Uydu kategorisinde Ön Tasarım İnceleme ve Kritik Tasarım İnceleme Raporu aşamalarını eksiksiz tamamlayıp finale kalmak; 2020’den bu yana yaptığımız final uçuşlarındaki başarımızı sürdürmek.',
      'go2.t': 'CanSat 2027',
      'go2.d': 'PDR, CDR ve FRR aşamalarını tamamlayıp uçuşa gitmek. Tüm görevleri eksiksiz yerine getirerek genel sıralamada 1. olmak ve ülkemizi temsil etmek.',
      'go3.t': 'AUVSI SUAS 2027',
      'go3.d': 'Yerli ve milli teknolojilerimizle ABD’de görev uçuşunu başarıyla tamamlayıp dereceyle dönmek ve ülkemizi uluslararası arenada temsil etmek.',
      'go4.t': 'TUA Astro Hackathon',
      'go4.d': '2026 senesindeki 2.lik derecemizi geçerek İstanbul’da ve ulusal finalde 1. olmayı hedefliyoruz.',

      'sp.eyebrow': 'Destek',
      'sp.title': 'Sponsorumuz Olun',
      'sp.p1': 'Araçlarımızın üretimi, yarışmalara ulaşımımız ve test süreçlerimiz tamamen destekle yürüyor. ABD’deki CanSat ve AUVSI SUAS yarışmalarına ekibimizi ve araçlarımızı götürebilmek, elektronik donanımı yedekleriyle temin edebilmek ve projeye rapor tarihlerinden önce başlayabilmek için sponsorluğa ihtiyaç duyuyoruz.',
      'sp.n1': 'Kompozit ve gövde malzemeleri',
      'sp.n2': 'Uçuş kontrol kartı, RF, anten, PCB',
      'sp.n3': 'Ulaşım, kargo ve konaklama',
      'sp.n4': 'Yarışma katılım ücretleri',
      'sp.n5': 'Test ve geliştirme süreci',
      'sp.n6': 'Tanıtım çalışmaları',
      'sp.cta': 'Bize ulaşın',
      'sp.img': 'CHARGE takımı TEKNOFEST fuar standında araçlarının yanında',

      'su1.t': 'Maddi Sponsorluk',
      'su1.d': 'Araçlarımızın tamamlanması ve ekibimizin yurt içi ve yurt dışı yarışmalara katılabilmesi için gerekli bütçeyi sağlayabilirsiniz.',
      'su2.t': 'Üretim Sponsorluğu',
      'su2.d': 'Malzeme listemizdeki parça ve ekipmanları yedekleriyle temin edebilir ya da üretimini üstlenebilirsiniz.',
      'su3.t': 'Medya Sponsorluğu',
      'su3.d': 'Takımımızın tanıtım ve yarışma içeriklerini kendi mecralarınızda paylaşarak sürecimizi daha geniş kitlelere ulaştırabilirsiniz.',
      'su4.t': 'Lojistik Desteği',
      'su4.d': 'Araçlarımızı ve ekiplerimizi ABD’deki yarışmalara götürebilmemiz için gerekli kargo, ulaşım ve konaklama desteğini sağlayabilirsiniz.',

      'co.eyebrow': 'Bağlantı',
      'co.title': 'İletişim',
      'co.org': 'İstanbul Üniversitesi-Cerrahpaşa Mühendislik Fakültesi',
      'co.org2': 'CHARGE · Cerrahpaşa Havacılık ve Ar-Ge Takımı',
      'co.r1': 'Elektronik Birim Kaptanı',
      'co.r2': 'Yazılım Birim Kaptanı',
      'co.ig': 'Instagram', 'co.li': 'LinkedIn', 'co.mail': 'E-posta',

      'ft.thanks': 'Desteğiniz için teşekkür ederiz.',
      'ft.fine': 'CHARGE · Cerrahpaşa Havacılık ve Ar-Ge Takımı · İstanbul Üniversitesi-Cerrahpaşa'
    },

    en: {
      'skip': 'Skip to content',

      'nav.about': 'About', 'nav.sat': 'Our Satellite', 'nav.mission': 'Mission Profile',
      'nav.record': 'Flight Record', 'nav.goals': 'Goals', 'nav.sponsor': 'Sponsorship',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Istanbul University-Cerrahpaşa · Faculty of Engineering',
      'hero.sub': 'Cerrahpaşa Aviation and R&D Team',
      'hero.tag': 'We design. We build. We fly.',
      'hero.cta1': 'Our flight record',
      'hero.cta2': 'Become a sponsor',

      'status.k1': 'MISSION', 'status.k2': 'FOCUS', 'status.v2': 'CANSAT',
      'status.k3': 'STATUS', 'status.v3': 'IN PREPARATION', 'status.k4': 'LOCATION', 'status.k5': 'TAG',

      'stat1.k': '2026 CanSat PDR', 'stat1.s': '3rd in Türkiye · 8th worldwide',
      'stat2.k': 'CanSat 2025 finalist', 'stat2.s': 'Out of hundreds of teams',
      'stat3.k': 'TEKNOFEST 2023 entrants', 'stat3.s': 'We were among the 80 finalists',
      'stat4.k': 'Engineering disciplines', 'stat4.s': 'Mechanical · EEE · Industrial · Computer',

      'about.eyebrow': 'Team',
      'about.title': 'Who We Are',
      'about.p1': 'CHARGE is an aviation and R&D team made up of students from the Faculty of Engineering at Istanbul University-Cerrahpaşa. Built from students determined to grow in the aviation, space and defence industries, our team competes nationally and internationally in unmanned aerial vehicles and model satellite systems.',
      'about.p2': 'We have reached the TEKNOFEST finals every year since 2020, and in 2025 we represented Türkiye at the CanSat Competition in the United States.',
      'about.d1': 'Mechanical Engineering', 'about.d2': 'Electrical &amp; Electronics Engineering',
      'about.d3': 'Industrial Engineering', 'about.d4': 'Computer Engineering',
      'about.img': 'Model satellites and unmanned aerial vehicles built by the CHARGE team, lined up on a bench',
      'about.cap': 'Model satellite and UAV systems built by the team',

      'quote.text': '“The idea of a vehicle that could lift vertically and hang motionless in the air was probably born at the same time as the dream of human flight itself.”',

      'mission.tag': 'Our Mission',
      'mission.text': 'To put the experience, knowledge and technology we gain on the path to becoming “qualified engineers for a Türkiye that produces technology” at the service of humanity, and to help raise a generation of engineers who can anticipate the needs of their age and carry their country forward.',
      'vision.tag': 'Our Vision',
      'vision.text': 'To develop the electronic, software and mechanical subsystems of UAV and model satellite systems with original ideas, and to build our own controller, flight control board, RF equipment and ground control station in house.',

      'sat.eyebrow': 'System',
      'sat.title': 'What Is a Model Satellite?',
      'sat.p1': 'A model satellite (CanSat) is an engineering project that fits every subsystem of a real satellite — power, communications, sensors and recovery — into a body the size of a can. It is carried to altitude by a rocket and transmits the data it collects during descent to a ground station.',
      'sat.svgtitle': 'Diagram of model satellite subsystems',
      'sat.img1': 'Internal structure of the model satellite: carrier plate, carbon rods and wiring',
      'sat.img2': 'Circular printed circuit board designed by the team',
      'sat.img3': 'Two team members holding the model satellite body and its carrier structure',

      'sub.rec': 'Recovery',
      'sub.rec.d': 'Parachute and descent mechanism, bringing the vehicle down under control and undamaged.',
      'sub.com': 'Communications',
      'sub.com.d': 'The telemetry link, streaming data collected throughout descent to the ground station.',
      'sub.sen': 'Sensors',
      'sub.sen.d': 'Measuring and logging pressure, temperature, position and orientation throughout the mission.',
      'sub.pow': 'Power',
      'sub.pow.d': 'Battery and power distribution, feeding every subsystem for the duration of the mission.',

      'uav.tag': 'UAV',
      'uav.text': 'An Unmanned Aerial Vehicle (UAV) flies without a pilot on board, either by remote control or fully autonomously. Built as rotary wing (drone) or fixed wing, it serves in search and rescue, environmental monitoring, defence and many other fields. Our team competed in these categories between 2020 and 2023.',

      'mis.eyebrow': 'Mission',
      'mis.title': 'Mission Profile',
      'mis.p1': 'A model satellite mission reads as a single trajectory: ascent under rocket power, separation at apogee, controlled descent, and uninterrupted data transmission all the way down.',
      'mis.svgtitle': 'Model satellite mission profile: launch, apogee, separation, descent and touchdown',
      'wp.1': 'LAUNCH', 'wp.2': 'APOGEE', 'wp.3': 'SEPARATION',
      'wp.4': 'DESCENT & TELEMETRY', 'wp.5': 'TOUCHDOWN',

      'rec.eyebrow': 'Record',
      'rec.title': 'Flight Record',
      'rec.cansat.meta': 'International Model Satellite Competition · Virginia, USA',
      'rec.cansat.p': 'At the international model satellite competition held every year in the United States, we took part in the <b>Auto-Gyro Descender</b> mission in 2025. As <b>one of the 41 teams that reached the final</b> out of hundreds, we completed every mission task and received our competition certificates.',

      'sc1.k': '2025 PDR', 'sc1.s': '1st in Türkiye · 2nd worldwide',
      'sc2.k': '2025 CDR', 'sc2.s': '1st in Türkiye',
      'sc3.k': '2026 PDR', 'sc3.s': '3rd in Türkiye · 8th worldwide',

      'rec.tf.meta': 'Aerospace and Technology Festival · since 2020',
      'tf26.cat': 'Model Satellite',
      'tf26.d': 'In the Model Satellite Competition we scored 96/100 on the Preliminary Design Report and 91/100 on the Critical Design Report.',
      'tf23.cat': 'Rotary &amp; Fixed Wing UAV',
      'tf23.g1': 'Rotary KTR 92/100', 'tf23.g2': 'Fixed KTR 80/100',
      'tf22.g1': 'Rotary KTR 85/100', 'tf22.g3': 'Fixed KTR 83/100',
      'tf23.d': 'We became <b>one of the 80 teams to reach the final</b> out of 1060 entrants, and completed the bilge water cleaning mission we designed ourselves. Our fixed wing vehicle used an entirely domestic controller and circuit system.',
      'tf22.cat': 'Rotary &amp; Fixed Wing UAV',
      'tf22.d': 'We placed <b>4th</b> in the rotary wing category with our Detailed Design Report. Our fully composite fixed wing vehicle drew interest from many companies in the exhibition area.',
      'tf21.cat': 'Rotary Wing UAV',
      'tf21.d': 'Among the 74 teams that reached the final out of 160, we were one of only 14 to complete both missions, placing <b>8th.</b>',
      'tf20.cat': 'Rotary Wing UAV',
      'tf20.d': 'We placed <b>8th</b> among the 61 teams that reached the final.',

      'auvsi.meta': 'Student Unmanned Aerial Systems · USA',
      'auvsi.d': 'We successfully completed the 2026 application process.',
      'tua.meta': 'Turkish Space Agency · Ankara',
      'tua.d': 'Placing <b>2nd</b> in the Istanbul European region, we were one of the 80 teams to reach the national final and presented our cube satellite project to the jury in Ankara.',

      'rec.img1': 'The model satellite beside the second place trophy the team won',
      'rec.img2': 'Team members on stage at the TUA Astro Hackathon',
      'rec.img3': 'Three team members holding the trophy together',
      'rec.img4': 'The team photographed together with their vehicles',

      'go.eyebrow': 'Roadmap',
      'go.title': 'Our 2027 Goals',
      'go1.t': 'TEKNOFEST 2027',
      'go1.d': 'To complete the Preliminary and Critical Design Review stages in the Model Satellite category without a gap and reach the final, continuing the record of final flights we have held since 2020.',
      'go2.t': 'CanSat 2027',
      'go2.d': 'To complete the PDR, CDR and FRR stages and make it to flight. To carry out every mission task in full, place 1st overall and represent our country.',
      'go3.t': 'AUVSI SUAS 2027',
      'go3.d': 'To complete the mission flight in the United States with our own domestic technologies, return with a placing, and represent our country on the international stage.',
      'go4.t': 'TUA Astro Hackathon',
      'go4.d': 'To surpass our 2nd place finish of 2026 and take 1st place both in Istanbul and in the national final.',

      'sp.eyebrow': 'Support',
      'sp.title': 'Become a Sponsor',
      'sp.p1': 'Building our vehicles, travelling to competitions and running our test campaigns all depend on support. We need sponsorship to take our team and vehicles to the CanSat and AUVSI SUAS competitions in the United States, to source electronic hardware together with spares, and to start work well before report deadlines.',
      'sp.n1': 'Composite and structural materials',
      'sp.n2': 'Flight control board, RF, antenna, PCB',
      'sp.n3': 'Travel, freight and accommodation',
      'sp.n4': 'Competition entry fees',
      'sp.n5': 'Testing and development',
      'sp.n6': 'Outreach and promotion',
      'sp.cta': 'Get in touch',
      'sp.img': 'The CHARGE team at their TEKNOFEST exhibition stand beside their vehicles',

      'su1.t': 'Financial Sponsorship',
      'su1.d': 'You can provide the budget we need to finish our vehicles and take part in competitions at home and abroad.',
      'su2.t': 'Production Sponsorship',
      'su2.d': 'You can supply the parts and equipment on our materials list together with spares, or take on their manufacture.',
      'su3.t': 'Media Sponsorship',
      'su3.d': 'You can share our promotional and competition content on your own channels and carry our journey to a wider audience.',
      'su4.t': 'Logistics Support',
      'su4.d': 'You can provide the freight, travel and accommodation support we need to get our vehicles and team to the competitions in the United States.',

      'co.eyebrow': 'Connect',
      'co.title': 'Contact',
      'co.org': 'Istanbul University-Cerrahpaşa, Faculty of Engineering',
      'co.org2': 'CHARGE · Cerrahpaşa Aviation and R&D Team',
      'co.r1': 'Electronics Unit Captain',
      'co.r2': 'Software Unit Captain',
      'co.ig': 'Instagram', 'co.li': 'LinkedIn', 'co.mail': 'E-mail',

      'ft.thanks': 'Thank you for your support.',
      'ft.fine': 'CHARGE · Cerrahpaşa Aviation and R&D Team · Istanbul University-Cerrahpaşa'
    }
  };

  var HTML_KEYS = /^(quote\.text|rec\.cansat\.p|tf2[0-9]\.d|tua\.d|about\.d2|tf2[23]\.cat)$/;

  var lang = 'tr';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function fetchStore(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function applyLang(next) {
    var dict = I18N[next];
    if (!dict) return;
    lang = next;
    document.documentElement.lang = next;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key];
      if (val == null) return;
      if (HTML_KEYS.test(key) || val.indexOf('<') > -1 || val.indexOf('&') > -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var val = dict[bits[1].trim()];
        if (val != null) el.setAttribute(bits[0].trim(), val);
      });
    });

    var btn = document.getElementById('langBtn');
    if (btn) {
      btn.querySelector('.lang__on').textContent = next.toUpperCase();
      btn.querySelector('.lang__off').textContent = next === 'tr' ? 'EN' : 'TR';
      btn.setAttribute('aria-label', next === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    }

    var cue = document.querySelector('.scrollcue');
    if (cue) cue.setAttribute('aria-label', next === 'tr' ? 'Aşağı kaydır' : 'Scroll down');

    var nav = document.getElementById('navLinks');
    if (nav) nav.setAttribute('aria-label', next === 'tr' ? 'Bölümler' : 'Sections');

    store('charge-lang', next);
  }

  var saved = fetchStore('charge-lang');
  var initial = saved || ((navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  if (initial !== 'tr') applyLang(initial); else applyLang('tr');

  var langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(lang === 'tr' ? 'en' : 'tr');
    });
  }

  /* ───────────────────────── Yıldız alanı ───────────────────────── */

  (function starfield() {
    var cv = document.getElementById('stars');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var stars = [];
    var w = 0, h = 0, dpr = 1, raf = null, t = 0;

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.round(Math.min(w * h / 5200, 420));
      stars = [];
      for (var i = 0; i < count; i++) {
        var depth = Math.random();
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: depth,
          r: 0.4 + depth * 1.5,
          a: 0.25 + depth * 0.6,
          tw: Math.random() * Math.PI * 2
        });
      }
    }

    function draw(scrollY) {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var off = (scrollY * (0.06 + s.z * 0.28));
        var y = s.y - off;
        // dikey sarma
        y = ((y % h) + h) % h;
        var alpha = s.a * (reduced ? 1 : (0.65 + 0.35 * Math.sin(t * 0.9 + s.tw)));
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.fillStyle = s.z > 0.75 ? '#9FD4FF' : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      t += 0.016;
      draw(window.scrollY || 0);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (reduced) { draw(0); return; }
      if (raf === null) raf = requestAnimationFrame(loop);
    }
    function stop() {
      if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
    }

    build();
    start();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { build(); if (reduced) draw(0); }, 180);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    // hero ekrandan çıkınca boşuna çizme
    if ('IntersectionObserver' in window) {
      var hero = document.getElementById('hero');
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? start() : stop(); });
      }, { threshold: 0 }).observe(hero);
    }
  })();

  /* ───────────────────────── Nav ───────────────────────── */

  var nav = document.getElementById('nav');
  var progress = document.getElementById('progress');
  var navLinks = document.getElementById('navLinks');
  var burger = document.getElementById('burger');
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  if (burger) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      var docH = document.documentElement.scrollHeight - window.innerHeight;

      nav.classList.toggle('is-stuck', y > window.innerHeight * 0.75);
      if (progress) progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';

      // scroll-spy
      var mid = y + window.innerHeight * 0.35;
      var active = -1;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= mid) active = i;
      }
      links.forEach(function (a, i) { a.classList.toggle('is-active', i === active); });

      drawProfile();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ───────────────────────── Reveal ───────────────────────── */

  var revealables = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { ro.observe(el); });
  }

  /* ───────────────────────── Sayaçlar ───────────────────────── */

  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (isNaN(target)) return;
    if (reduced) { el.textContent = target.toFixed(dec); return; }

    var dur = 1500, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-count]');
  if (reduced || !('IntersectionObserver' in window)) {
    counters.forEach(runCounter);
  } else {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ───────────────────────── Görev profili ───────────────────────── */

  var profile = document.getElementById('profile');
  var profPath = document.getElementById('profPath');
  var waypoints = Array.prototype.slice.call(document.querySelectorAll('.wp'));
  var pathLen = 0;

  if (profPath) {
    pathLen = profPath.getTotalLength();
    if (reduced) {
      profPath.style.strokeDasharray = 'none';
      waypoints.forEach(function (w) { w.classList.add('is-on'); });
    } else {
      profPath.style.strokeDasharray = pathLen;
      profPath.style.strokeDashoffset = pathLen;
    }
  }

  function drawProfile() {
    if (!profile || !profPath || reduced) return;
    var r = profile.getBoundingClientRect();
    var vh = window.innerHeight;
    // bölüm ekranın altından ortasına doğru geldikçe 0 → 1
    var p = (vh - r.top) / (vh * 0.55 + r.height * 0.5);
    p = Math.max(0, Math.min(1, p));

    profPath.style.strokeDashoffset = pathLen * (1 - p);
    waypoints.forEach(function (w) {
      w.classList.toggle('is-on', p >= parseFloat(w.getAttribute('data-p')) - 0.02);
    });
  }

  /* ───────────────────────── Alt sistemler ───────────────────────── */

  var layers = Array.prototype.slice.call(document.querySelectorAll('.cs-layer'));
  var subBtns = Array.prototype.slice.call(document.querySelectorAll('.subs button'));

  function highlight(name) {
    layers.forEach(function (l) {
      var hit = l.getAttribute('data-sub') === name;
      l.classList.toggle('is-hot', hit);
      l.classList.toggle('is-dim', name !== null && !hit);
    });
    subBtns.forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-sub') === name);
    });
  }

  subBtns.forEach(function (b) {
    var name = b.getAttribute('data-sub');
    b.addEventListener('mouseenter', function () { highlight(name); });
    b.addEventListener('focus', function () { highlight(name); });
    b.addEventListener('click', function () { highlight(name); });
    b.addEventListener('mouseleave', function () { highlight(null); });
    b.addEventListener('blur', function () { highlight(null); });
  });

  onScroll();
})();
