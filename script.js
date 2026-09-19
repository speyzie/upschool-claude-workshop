/* ═══════════════════════════════════════════
   CHARGE — site davranışı
   i18n · yıldız alanı · nav · belirme
   sayaçlar · görev profili · alt sistemler
   ═══════════════════════════════════════════ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────── i18n ─────────── */

  var I18N = {
    tr: {
      'skip': 'İçeriğe geç',

      'nav.about': 'Takım', 'nav.sat': 'Model Uydu', 'nav.record': 'Uçuş Kaydı',
      'nav.goals': 'Hedefler', 'nav.sponsor': 'Sponsorluk', 'nav.contact': 'İletişim',

      'hero.org': 'Cerrahpaşa Havacılık ve Ar-Ge Takımı',
      'hero.tag': 'Bir uydunun yapabildiği her şeyi, bir kutunun içine sığdırıyoruz.',

      'rail.k1': 'Görev', 'rail.k2': 'Kategori', 'rail.v2': 'Model Uydu',
      'rail.k3': 'Durum', 'rail.v3': 'Hazırlık',
      'rail.k4': 'Üs', 'rail.v4': 'İstanbul · 41.0082°N',

      'fig1': '2026 CanSat PDR puanımız — Türkiye 3., dünya 8.',
      'fig2': '2025’te CanSat finaline kalan takımdan biriyiz',
      'fig3': 'TEKNOFEST 2023’te yarışan takım — finaldeki 80 içindeydik',
      'fig4': '2020’den bu yana kesintisiz TEKNOFEST yılı',

      'about.tag': 'Takım',
      'about.h': 'Mühendisliği<br>okulda değil,<br>atölyede öğreniyoruz.',
      'about.p1': 'CHARGE, İstanbul Üniversitesi-Cerrahpaşa Mühendislik Fakültesi öğrencilerinden oluşan bir havacılık ve Ar-Ge takımıdır. İnsansız hava araçları ve model uydu sistemleri üzerine ulusal ve uluslararası yarışmalara hazırlanıyoruz.',
      'about.p2': '2020’den bu yana her yıl TEKNOFEST finallerinde yer aldık. 2025’te CanSat yarışmasıyla ülkemizi ABD’de temsil ettik.',
      'about.alt': 'Takımın ürettiği model uydu, kupa ve döner kanat İHA bir tezgâh üzerinde yan yana',
      'about.cap': 'Beş yılın çıktısı: model uydular, İHA’lar ve kazanılan kupalar',
      'u1': 'Makine Mühendisliği', 'u2': 'Elektrik-Elektronik Mühendisliği',
      'u3': 'Endüstri Mühendisliği', 'u4': 'Bilgisayar Mühendisliği',

      'quote': '“Dik olarak yükselebilen ve havada asılı kalabilen araç fikri, muhtemelen insanoğlunun uçmayı hayal edişiyle aynı zamanda doğmuştur.”',
      'mis.t': 'Misyonumuz',
      'mis.d': '“Teknoloji üreten bir Türkiye için nitelikli mühendis” olma yolunda edindiğimiz tecrübe, bilgi ve teknolojiyi insanlık yararına sunmak; çağın gerekliliklerini öngörebilen ve ülkesini ileri taşıyan bir mühendis neslinin yetişmesine katkıda bulunmak.',
      'viz.t': 'Vizyonumuz',
      'viz.d': 'İHA ve model uydu sistemlerinin elektronik, yazılım ve mekanik alt sistemlerini özgün fikirlerle geliştirmek; yerli kumanda, uçuş kontrol kartı, RF ekipmanları ve yer kontrol istasyonunu takımımız bünyesinde üretmek.',

      'sat.tag': 'Sistem',
      'sat.h': 'Bir teneke kutu<br>büyüklüğünde uydu.',
      'sat.p': 'Model uydu (CanSat), gerçek bir uydunun tüm alt sistemlerini küçük bir gövdeye sığdıran bir mühendislik projesidir. Roketle irtifaya çıkarılır; ayrıldığı andan yere temas edene kadar topladığı veriyi yer istasyonuna aktarır.',
      'sat.svg': 'Model uydu alt sistemleri şeması',
      'sat.alt1': 'Model uydunun iç yapısı: taşıyıcı plaka, karbon çubuklar ve kablolama',
      'sat.alt2': 'Takımın kendi tasarladığı yuvarlak baskı devre kartı',
      'sat.cap1': 'Taşıyıcı yapı ve kablolama',
      'sat.cap2': 'Takımın kendi tasarladığı uçuş kartı',

      's1.t': 'İniş Sistemi', 's1.d': 'Paraşüt ve iniş düzeneği; aracın kontrollü ve hasarsız yere ulaşmasını sağlar.',
      's2.t': 'Haberleşme',   's2.d': 'Telemetri bağlantısı; iniş boyunca toplanan veriyi yer istasyonuna canlı iletir.',
      's3.t': 'Sensörler',    's3.d': 'Basınç, sıcaklık, konum ve yönelim verisini görev boyunca ölçer ve kaydeder.',
      's4.t': 'Güç',          's4.d': 'Batarya ve güç dağıtımı; tüm alt sistemleri görev süresince besler.',

      'mp.tag': 'Görev profili',
      'mp.h': 'Kalkıştan yere temasa.',
      'mp.svg': 'Görev profili: kalkış, apoje, ayrılma, iniş ve yere temas',
      'w1': 'KALKIŞ', 'w2': 'APOJE', 'w3': 'AYRILMA', 'w4': 'VERİ AKTARIMI', 'w5': 'YERE TEMAS',

      'rec.tag': 'Uçuş kaydı',
      'rec.h': 'Beş yıl, dört yarışma,<br>iki kıta.',
      'rec.cs.w': 'Uluslararası Model Uydu Yarışması · Virginia, ABD',
      'rec.cs.p': '2025’te <b>Auto-Gyro Descender</b> görevine katıldık. Yüzlerce takım arasından <b>finale kalan 41 takımdan biri</b> olarak tüm görevleri yerine getirdik ve yarışma sertifikalarımızı aldık.',
      'm1.k': '2025 PDR', 'm1.v': 'Türkiye 1. · Dünya 2.',
      'm2.k': '2025 CDR', 'm2.v': 'Türkiye 1.',
      'm3.k': '2026 PDR', 'm3.v': 'Türkiye 3. · Dünya 8.',

      'rec.tf.w': 'Havacılık, Uzay ve Teknoloji Festivali · 2020’den bu yana',
      'rec.tf.cap': 'TEKNOFEST yarışma sonuçlarımız',
      'th.y': 'Yıl', 'th.c': 'Kategori', 'th.s': 'Rapor puanları', 'th.r': 'Sonuç',
      'y26.c': 'Model Uydu', 'y26.r': 'Süreç devam ediyor',
      'y23.c': 'Döner &amp; Sabit Kanat İHA',
      'y23.s': 'Döner KTR 92 · Sabit KTR 80',
      'y23.r': '1060 takım arasından finaldeki 80 takımdan biri; sintine suyu temizleme görevi tamamlandı',
      'y22.c': 'Döner &amp; Sabit Kanat İHA',
      'y22.s': 'Döner KTR 85 · DTR 88 · Sabit KTR 83',
      'y22.r': '<b>4.</b> — döner kanat, Detaylı Tasarım Raporu',
      'y21.c': 'Döner Kanat İHA',
      'y21.r': '<b>8.</b> — 160 takımdan finaldeki 74 içinde, iki görevi de bitiren 14 takımdan biri',
      'y20.c': 'Döner Kanat İHA',
      'y20.r': '<b>8.</b> — finale kalan 61 takım arasında',

      'auv.w': 'Student Unmanned Aerial Systems · ABD',
      'auv.d': '2026 başvuru sürecini başarıyla tamamladık.',
      'tua.w': 'Türkiye Uzay Ajansı · Ankara',
      'tua.d': 'İstanbul Avrupa bölgesinde <b>2. olduk</b>; ulusal finale kalan 80 takımdan biri olarak küp uydu projemizi Ankara’da jürilere sunduk.',

      'r.a1': 'Model uydu ve yanında kazanılan ikincilik kupası',
      'r.a2': 'Takım üyeleri TUA Astro Hackathon sahnesinde',
      'r.a3': 'Üç takım üyesi kazanılan kupayı birlikte tutuyor',
      'r.a4': 'Takım üyesi sabit kanat insansız hava aracını sahada taşıyor',

      'go.tag': 'Yol haritası',
      'go.h': '2027’de<br>ne yapacağız.',
      'g1': 'Model Uydu kategorisinde ÖTR ve KTR aşamalarını eksiksiz tamamlayıp finale kalmak; 2020’den bu yana süren final uçuşu başarımızı sürdürmek.',
      'g2': 'PDR, CDR ve FRR aşamalarını tamamlayıp uçuşa gitmek. Tüm görevleri eksiksiz yerine getirerek genel sıralamada 1. olmak.',
      'g3': 'Yerli ve milli teknolojilerimizle ABD’de görev uçuşunu tamamlayıp dereceyle dönmek.',
      'g4': '2026’daki ikinciliğimizi geçerek İstanbul’da ve ulusal finalde 1. olmak.',

      'sp.tag': 'Sponsorluk',
      'sp.h': 'Bu işi<br>destekle yapıyoruz.',
      'sp.p': 'Araçlarımızın üretimi, yarışmalara ulaşımımız ve test süreçlerimiz tamamen destekle yürüyor. ABD’deki CanSat ve AUVSI SUAS yarışmalarına ekibimizi ve araçlarımızı götürebilmek, elektronik donanımı yedekleriyle temin edebilmek ve projeye rapor tarihlerinden önce başlayabilmek için sponsora ihtiyaç duyuyoruz.',
      'w.1t': 'Maddi',   'w.1d': 'Araçların tamamlanması ve yurt içi/dışı yarışma katılımı için bütçe.',
      'w.2t': 'Üretim',  'w.2d': 'Malzeme listemizdeki parça ve ekipmanların yedekleriyle temini ya da üretimi.',
      'w.3t': 'Medya',   'w.3d': 'Tanıtım ve yarışma içeriklerimizin kendi mecralarınızda paylaşılması.',
      'w.4t': 'Lojistik','w.4d': 'ABD’deki yarışmalar için kargo, ulaşım ve konaklama desteği.',
      'sp.cta': 'Bize ulaşın',
      'sp.alt': 'CHARGE takımı TEKNOFEST fuar standında araçlarının yanında',
      'sp.cap': 'TEKNOFEST standımız',

      'co.tag': 'İletişim',
      'co.h': 'Konuşalım.',
      'co.p': 'Sponsorluk, iş birliği ya da takıma katılmak için doğrudan birim kaptanlarımıza yazabilirsiniz.',
      'co.r1': 'Elektronik Birim Kaptanı',
      'co.r2': 'Yazılım Birim Kaptanı',
      'co.mail': 'E-posta',
      'co.uni': 'İstanbul Üniversitesi-Cerrahpaşa · Mühendislik Fakültesi · Avcılar, İstanbul',

      'ft.t': 'Desteğiniz için teşekkür ederiz.'
    },

    en: {
      'skip': 'Skip to content',

      'nav.about': 'Team', 'nav.sat': 'CanSat', 'nav.record': 'Flight Record',
      'nav.goals': 'Goals', 'nav.sponsor': 'Sponsorship', 'nav.contact': 'Contact',

      'hero.org': 'Cerrahpaşa Aviation and R&D Team',
      'hero.tag': 'Everything a satellite can do, packed into a can.',

      'rail.k1': 'Mission', 'rail.k2': 'Category', 'rail.v2': 'CanSat',
      'rail.k3': 'Status', 'rail.v3': 'In preparation',
      'rail.k4': 'Base', 'rail.v4': 'Istanbul · 41.0082°N',

      'fig1': 'Our 2026 CanSat PDR score — 3rd in Türkiye, 8th worldwide',
      'fig2': 'One of the teams that reached the CanSat final in 2025',
      'fig3': 'Teams at TEKNOFEST 2023 — we were among the 80 finalists',
      'fig4': 'Consecutive years at TEKNOFEST since 2020',

      'about.tag': 'Team',
      'about.h': 'We learn engineering<br>in the workshop,<br>not the lecture hall.',
      'about.p1': 'CHARGE is an aviation and R&D team made up of students from the Faculty of Engineering at Istanbul University-Cerrahpaşa. We compete nationally and internationally in unmanned aerial vehicles and model satellite systems.',
      'about.p2': 'We have reached the TEKNOFEST finals every year since 2020. In 2025 we represented Türkiye at the CanSat Competition in the United States.',
      'about.alt': 'A model satellite, a trophy and a rotary wing UAV built by the team, lined up on a bench',
      'about.cap': 'Five years of output: model satellites, UAVs and the trophies they won',
      'u1': 'Mechanical Engineering', 'u2': 'Electrical &amp; Electronics Engineering',
      'u3': 'Industrial Engineering', 'u4': 'Computer Engineering',

      'quote': '“The idea of a vehicle that could lift vertically and hang motionless in the air was probably born at the same time as the dream of human flight itself.”',
      'mis.t': 'Our Mission',
      'mis.d': 'To put the experience, knowledge and technology we gain on the path to becoming “qualified engineers for a Türkiye that produces technology” at the service of humanity, and to help raise a generation of engineers who can anticipate the needs of their age and carry their country forward.',
      'viz.t': 'Our Vision',
      'viz.d': 'To develop the electronic, software and mechanical subsystems of UAV and model satellite systems with original ideas, and to build our own controller, flight control board, RF equipment and ground control station in house.',

      'sat.tag': 'System',
      'sat.h': 'A satellite the size<br>of a drink can.',
      'sat.p': 'A model satellite (CanSat) is an engineering project that fits every subsystem of a real satellite into a body the size of a can. It is carried to altitude by a rocket, and from the moment it separates until it touches the ground it streams the data it collects to a ground station.',
      'sat.svg': 'Diagram of model satellite subsystems',
      'sat.alt1': 'Internal structure of the model satellite: carrier plate, carbon rods and wiring',
      'sat.alt2': 'Circular printed circuit board designed by the team',
      'sat.cap1': 'Carrier structure and wiring',
      'sat.cap2': 'The flight board the team designed itself',

      's1.t': 'Recovery',       's1.d': 'Parachute and descent mechanism, bringing the vehicle down under control and undamaged.',
      's2.t': 'Communications', 's2.d': 'The telemetry link, streaming data collected throughout descent to the ground station.',
      's3.t': 'Sensors',        's3.d': 'Measuring and logging pressure, temperature, position and orientation throughout the mission.',
      's4.t': 'Power',          's4.d': 'Battery and power distribution, feeding every subsystem for the duration of the mission.',

      'mp.tag': 'Mission profile',
      'mp.h': 'From launch to touchdown.',
      'mp.svg': 'Mission profile: launch, apogee, separation, descent and touchdown',
      'w1': 'LAUNCH', 'w2': 'APOGEE', 'w3': 'SEPARATION', 'w4': 'TELEMETRY', 'w5': 'TOUCHDOWN',

      'rec.tag': 'Flight record',
      'rec.h': 'Five years, four competitions,<br>two continents.',
      'rec.cs.w': 'International Model Satellite Competition · Virginia, USA',
      'rec.cs.p': 'In 2025 we took part in the <b>Auto-Gyro Descender</b> mission. As <b>one of the 41 teams that reached the final</b> out of hundreds, we completed every mission task and received our competition certificates.',
      'm1.k': '2025 PDR', 'm1.v': '1st in Türkiye · 2nd worldwide',
      'm2.k': '2025 CDR', 'm2.v': '1st in Türkiye',
      'm3.k': '2026 PDR', 'm3.v': '3rd in Türkiye · 8th worldwide',

      'rec.tf.w': 'Aerospace and Technology Festival · since 2020',
      'rec.tf.cap': 'Our TEKNOFEST competition results',
      'th.y': 'Year', 'th.c': 'Category', 'th.s': 'Report scores', 'th.r': 'Result',
      'y26.c': 'Model Satellite', 'y26.r': 'Campaign in progress',
      'y23.c': 'Rotary &amp; Fixed Wing UAV',
      'y23.s': 'Rotary KTR 92 · Fixed KTR 80',
      'y23.r': 'One of the 80 finalists out of 1060 teams; completed the bilge water cleaning mission',
      'y22.c': 'Rotary &amp; Fixed Wing UAV',
      'y22.s': 'Rotary KTR 85 · DTR 88 · Fixed KTR 83',
      'y22.r': '<b>4th</b> — rotary wing, Detailed Design Report',
      'y21.c': 'Rotary Wing UAV',
      'y21.r': '<b>8th</b> — among the 74 finalists out of 160, one of only 14 to complete both missions',
      'y20.c': 'Rotary Wing UAV',
      'y20.r': '<b>8th</b> — among the 61 teams that reached the final',

      'auv.w': 'Student Unmanned Aerial Systems · USA',
      'auv.d': 'We successfully completed the 2026 application process.',
      'tua.w': 'Turkish Space Agency · Ankara',
      'tua.d': 'We placed <b>2nd</b> in the Istanbul European region; as one of the 80 teams to reach the national final we presented our cube satellite project to the jury in Ankara.',

      'r.a1': 'The model satellite beside the second place trophy the team won',
      'r.a2': 'Team members on stage at the TUA Astro Hackathon',
      'r.a3': 'Three team members holding the trophy together',
      'r.a4': 'A team member carrying the fixed wing unmanned aerial vehicle in the field',

      'go.tag': 'Roadmap',
      'go.h': 'What we will do<br>in 2027.',
      'g1': 'To complete the PDR and CDR stages in the Model Satellite category in full and reach the final, continuing the record of final flights we have held since 2020.',
      'g2': 'To complete the PDR, CDR and FRR stages and make it to flight. To carry out every mission task in full and place 1st overall.',
      'g3': 'To complete the mission flight in the United States with our own domestic technologies and return with a placing.',
      'g4': 'To surpass our 2nd place finish of 2026 and take 1st in Istanbul and in the national final.',

      'sp.tag': 'Sponsorship',
      'sp.h': 'We do this<br>on support.',
      'sp.p': 'Building our vehicles, travelling to competitions and running our test campaigns all depend on support. We need sponsors to take our team and vehicles to the CanSat and AUVSI SUAS competitions in the United States, to source electronic hardware together with spares, and to start work well before report deadlines.',
      'w.1t': 'Financial', 'w.1d': 'Budget to finish the vehicles and attend competitions at home and abroad.',
      'w.2t': 'Production','w.2d': 'Supplying the parts and equipment on our materials list with spares, or manufacturing them.',
      'w.3t': 'Media',     'w.3d': 'Sharing our outreach and competition content on your own channels.',
      'w.4t': 'Logistics', 'w.4d': 'Freight, travel and accommodation support for the competitions in the United States.',
      'sp.cta': 'Get in touch',
      'sp.alt': 'The CHARGE team at their TEKNOFEST exhibition stand beside their vehicles',
      'sp.cap': 'Our TEKNOFEST stand',

      'co.tag': 'Contact',
      'co.h': 'Let’s talk.',
      'co.p': 'For sponsorship, collaboration or joining the team, write directly to our unit captains.',
      'co.r1': 'Electronics Unit Captain',
      'co.r2': 'Software Unit Captain',
      'co.mail': 'E-mail',
      'co.uni': 'Istanbul University-Cerrahpaşa · Faculty of Engineering · Avcılar, Istanbul',

      'ft.t': 'Thank you for your support.'
    }
  };

  var lang = 'tr';
  var RICH = /<|&[a-z]+;/;   // HTML iceren degerler innerHTML ile yazilir

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function apply(next) {
    var d = I18N[next];
    if (!d) return;
    lang = next;
    document.documentElement.lang = next;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v == null) return;
      if (RICH.test(v)) el.innerHTML = v; else el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (p) {
        var b = p.split(':');
        if (b.length !== 2) return;
        var v = d[b[1].trim()];
        if (v != null) el.setAttribute(b[0].trim(), v);
      });
    });

    var btn = document.getElementById('langBtn');
    if (btn) {
      btn.querySelector('b').textContent = next.toUpperCase();
      btn.querySelector('span').textContent = next === 'tr' ? 'EN' : 'TR';
      btn.setAttribute('aria-label', next === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    }
    var menu = document.getElementById('navMenu');
    if (menu) menu.setAttribute('aria-label', next === 'tr' ? 'Bölümler' : 'Sections');
    var burger = document.getElementById('burger');
    if (burger) burger.setAttribute('aria-label', next === 'tr' ? 'Menü' : 'Menu');

    save('charge-lang', next);
  }

  apply(load('charge-lang') ||
        ((navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en'));

  var langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.addEventListener('click', function () { apply(lang === 'tr' ? 'en' : 'tr'); });

  /* ─────────── Yıldız alanı ─────────── */

  (function sky() {
    var cv = document.getElementById('sky');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var stars = [], w = 0, h = 0, raf = null, t = 0;

    function build() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(w * h / 6200, 340));
      stars = [];
      for (var i = 0; i < n; i++) {
        var z = Math.random();
        stars.push({ x: Math.random() * w, y: Math.random() * h, z: z,
                     r: 0.35 + z * 1.25, a: 0.18 + z * 0.5, p: Math.random() * 6.28 });
      }
    }

    function draw() {
      if (!w || !h) return;
      var sy = window.scrollY || 0;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var y = s.y - sy * (0.05 + s.z * 0.22);
        y = ((y % h) + h) % h;
        var a = s.a * (reduced ? 1 : 0.7 + 0.3 * Math.sin(t + s.p));
        ctx.globalAlpha = a < 0 ? 0 : a > 1 ? 1 : a;
        ctx.fillStyle = s.z > 0.8 ? '#A8D8FF' : '#FFFFFF';
        ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop() { t += 0.014; draw(); raf = requestAnimationFrame(loop); }
    function start() { if (reduced) { draw(); return; } if (raf === null) raf = requestAnimationFrame(loop); }
    function stop() { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } }

    build(); start();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(function () { build(); draw(); }, 180);
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

    var hero = document.querySelector('.hero');
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? start() : stop(); });
      }, { threshold: 0 }).observe(hero);
    }
  })();

  /* ─────────── Nav ─────────── */

  var nav = document.getElementById('nav');
  var bar = document.getElementById('progress');
  var menu = document.getElementById('navMenu');
  var burger = document.getElementById('burger');
  var links = [].slice.call(document.querySelectorAll('.nav__menu a'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); })
                     .filter(Boolean);

  if (burger) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var tick = false;
  function onScroll() {
    if (tick) return;
    tick = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      nav.classList.toggle('stuck', y > 40);
      if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

      var mid = y + window.innerHeight * 0.32, act = -1;
      for (var i = 0; i < targets.length; i++) if (targets[i].offsetTop <= mid) act = i;
      links.forEach(function (a, i) { a.classList.toggle('on', i === act); });

      drawTrack();
      tick = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ─────────── Belirme ─────────── */

  var riseSel = '.split__text, .split__shot, .pull, .duo > div, .sat__art, .subs, ' +
                '.pair figure, .entry, .strip figure, .plan li, .people, .links, ' +
                '.figures .fig, .track';
  var risers = [].slice.call(document.querySelectorAll(riseSel));
  risers.forEach(function (el) { el.classList.add('rise'); });

  if (reduced || !('IntersectionObserver' in window)) {
    risers.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    risers.forEach(function (el) { io.observe(el); });
  }

  /* ─────────── Sayaçlar ─────────── */

  function count(el) {
    var to = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (isNaN(to)) return;
    if (reduced) { el.textContent = to.toFixed(dec); return; }
    var dur = 1400, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(dec);
      if (p < 1) requestAnimationFrame(step); else el.textContent = to.toFixed(dec);
    }
    requestAnimationFrame(step);
  }

  var nums = document.querySelectorAll('[data-count]');
  if (reduced || !('IntersectionObserver' in window)) {
    nums.forEach(count);
  } else {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { count(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { co.observe(el); });
  }

  /* ─────────── Görev profili ─────────── */

  var track = document.getElementById('track');
  var arc = document.getElementById('arc');
  var wps = [].slice.call(document.querySelectorAll('.wp'));
  var len = 0;

  if (arc) {
    len = arc.getTotalLength();
    if (reduced) {
      wps.forEach(function (w) { w.classList.add('on'); });
    } else {
      arc.style.strokeDasharray = len;
      arc.style.strokeDashoffset = len;
    }
  }

  function drawTrack() {
    if (!track || !arc || reduced) return;
    var r = track.getBoundingClientRect(), vh = window.innerHeight;
    var p = (vh - r.top) / (vh * 0.6 + r.height * 0.5);
    p = p < 0 ? 0 : p > 1 ? 1 : p;
    arc.style.strokeDashoffset = len * (1 - p);
    wps.forEach(function (w) {
      w.classList.toggle('on', p >= parseFloat(w.getAttribute('data-p')) - 0.02);
    });
  }

  /* ─────────── Alt sistemler ─────────── */

  var lays = [].slice.call(document.querySelectorAll('.lay'));
  var btns = [].slice.call(document.querySelectorAll('.subs button'));

  function focusSub(name) {
    lays.forEach(function (l) {
      var hit = l.getAttribute('data-sub') === name;
      l.classList.toggle('hot', hit);
      l.classList.toggle('dim', name !== null && !hit);
    });
    btns.forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-sub') === name); });
  }

  btns.forEach(function (b) {
    var n = b.getAttribute('data-sub');
    ['mouseenter', 'focus', 'click'].forEach(function (ev) {
      b.addEventListener(ev, function () { focusSub(n); });
    });
    ['mouseleave', 'blur'].forEach(function (ev) {
      b.addEventListener(ev, function () { focusSub(null); });
    });
  });

  onScroll();
})();
