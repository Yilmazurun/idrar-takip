# İdrar Takip Uygulaması

Çocuklar için düzenli idrar alışkanlıklarını takip etmeyi amaçlayan React Native (CLI) tabanlı bir mobil uygulamadır.

## 📺 Tanıtım Videosu

[YouTube Tanıtım Videosunu İzlemek İçin Tıklayın](YOUTUBE_LINKI_BURAYA_GELECEK)

---

## 🚀 Projeyi Yerelde Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### Ön Gereksinimler
- [Node.js](https://nodejs.org/) (önerilen sürüm LTS)
- NPM veya Yarn
- [Android Studio](https://developer.android.com/studio) (Android için)
- [Xcode](https://developer.apple.com/xcode/) (iOS için, sadece macOS'te)

### 1. Bağımlılıkların Yüklenmesi
Terminali açıp projenin ana dizinine (`IdrarTakip`) gidin ve çalıştırın:
```bash
npm install
```

*(iOS için ekstra adım - sadece macOS'te geçerli)*
```bash
cd ios
pod install
cd ..
```

### 2. Uygulamayı Başlatma

Öncelikle bir terminal açıp paketleyiciyi (Metro bundler) başlatmanız önerilir:

```bash
npm start
```

#### Android'de Çalıştırma
Android Studio üzerinden bir Emulator (Sanal Cihaz) açın veya telefonunuzu USB ile bağlayıp USB Hata Ayıklama (USB Debugging) modunu açın. Yeni bir terminalde şunu çalıştırın:
```bash
npm run android
```
*Veya Android Studio üzerinden de projeyi açıp yeşil "Run" butonuna basarak çalıştırabilirsiniz.*

#### iOS'ta Çalıştırma (Sadece macOS)
Simulator'u açıp şunları çalıştırın:
```bash
npm run ios
```
*Veya Xcode üzerinden de çalıştırabilirsiniz.*

---

## 🛠️ Özellikler
- **Ebeveyn & Çocuk Maskot Giriş Ekranı**
- **Eğitim:** Çocuklara düzenli idrara çıkmayı anlatan bilgi kartları.
- **Takip:** "Uyanık" ve "Uykuda" durumlarının basit on-off sistemli tablolar yardımıyla cihaz hafızasında takibi.
- **Oyunlar:** (İleride eklenebilecek mini oyun arayüzleri)
