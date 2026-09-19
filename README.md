# CHARGE — Takım Web Sitesi

CHARGE (Cerrahpaşa Havacılık ve Ar-Ge Takımı) tanıtım sitesi. Tek sayfalık, aşağı kaydırmalı, Türkçe/İngilizce.

İçerik takımın 2026-2027 tanıtım dosyasından alınmıştır.

## Dosyalar

```
index.html     → sayfanın tüm içeriği
style.css      → tüm stiller
script.js      → dil değiştirme, animasyonlar, sayaçlar
assets/img/    → fotoğraflar
assets/favicon.svg
```

Derleme adımı, paket kurulumu, bağımlılık yok. Dosyaları açıp kaydetmek yeterli.

## Yerelde çalıştırma

```bash
python3 -m http.server 8000
```

Sonra tarayıcıda `http://localhost:8000` adresine git.

> `index.html`'e çift tıklayarak da açabilirsin ama bazı tarayıcılarda `file://` üzerinden fotoğraflar yüklenmeyebilir; yukarıdaki komut daha güvenli.

## Metin değiştirme

Her metin iki yerde duruyor ve **ikisini birden** güncellemen gerekiyor:

1. `index.html` içinde görünen Türkçe metin
2. `script.js` içindeki sözlükte aynı anahtarın `tr` ve `en` karşılığı

Örnek — hero sloganını değiştirmek:

```html
<!-- index.html -->
<p class="hero__tag" data-i18n="hero.tag">Tasarlıyoruz. Üretiyoruz. Uçuruyoruz.</p>
```

```js
// script.js
tr: { 'hero.tag': 'Tasarlıyoruz. Üretiyoruz. Uçuruyoruz.' }
en: { 'hero.tag': 'We design. We build. We fly.' }
```

`data-i18n="hero.tag"` ikisini birbirine bağlayan anahtardır. HTML'deki metin JavaScript kapalıyken görünen yedektir.

### Çeviri kontrolü

Bir metni eklerken diğer dili unutmamak için:

```bash
python3 check-i18n.py
```

Eksik veya fazla anahtar varsa listeler.

## Fotoğraf değiştirme

Yeni fotoğrafı `assets/img/` içine koy, `index.html`'deki `<img>` etiketinde `src`, `width`, `height` ve `alt` değerlerini güncelle. `alt` metninin İngilizcesi de `script.js` sözlüğünde (`data-i18n-attr` ile bağlı anahtar).

Fotoğrafları yüklemeden önce boyutunu küçült — uzun kenar 1600 px ve JPEG kalite ~82 yeterli.

## Yayınlama (GitHub Pages)

```bash
git add -A
git commit -m "Site güncellendi"
git push
```

Pages'i ilk kez açmak için: repo → **Settings** → **Pages** → *Source: Deploy from a branch* → **main** / **/ (root)** → Save.

Yayın adresi: `https://speyzie.github.io/upschool-claude-workshop/`

## Yapılacaklar

`index.html` içinde `TODO` olarak işaretli iki yer var:

- **LinkedIn** — şu an arama sayfasına gidiyor, sayfanızın tam adresini yazın
- **E-posta** — tanıtım dosyasında yalnızca `@chargetofuture` geçiyordu, tam adresi yazın

## Notlar

- **Renkler** takımın tanıtım dosyasından örneklendi: lacivert `#0C163A`, mavi `#2F6BFF`, camgöbeği `#35B6FF`. `style.css` en üstündeki `:root` bloğundan değiştirilebilir.
- **Yazı tipleri** Google Fonts: Chakra Petch (başlık), Barlow (gövde), JetBrains Mono (veri).
- **Animasyonlar** işletim sisteminde "hareketi azalt" açıksa otomatik kapanır.
- Sitedeki **her puan ve derece** tanıtım dosyasındaki değerlerle birebir aynıdır.
