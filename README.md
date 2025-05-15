# Kitap Mağaza Uygulaması Raporu

Bu proje, Node.js kullanılarak MVC modeliyle oluşturulmuş mağazadaki kitapların gözüktüğü sepete ekleme işlemi yapılmadan adres girerek sipariş verilebilinen veritabanını ürünleri listeleme ve tamamı satın alındığında silinme üzerine kullanmış bir uygulamadır.

---

## Proje Bilgileri

- **Proje Adı:** Kitap Mağazası
- **Proje Sahibi:** Bilal Çelik
- **Proje Tarihi:** 14.05.2025

---

## Projenin Amacı

Bu projenin asıl amacı Node.js ile birlikte bir web sitesinin nasıl yazılabileceğini ve planlanabileceğini öğrenmek ve buna bir deneyim kazandırmaktır.

---

## Projede Kullanılan Araçlar ve Amaçları

- **Node.js:** Sunucu taraflı uygulama geliştirme
- **Express.js:** Daha hızlı ve verimli sunucu oluşturma
- **EJS:** HTML içinde JavaScript kodları çalıştırma
- **SQLite:** Dosya tabanlı veritabanı
- **Bootstrap:** Arayüz tasarımı

---

## Projedeki İşlemler

- Kitap listeleme ve kitap detay sayfası
- Kitap türlerine göre ayırma
- Kitap ekleme/güncelleme/silme
- Tema ayarları (Koyu/Açık Tema)

---

## Proje Kurulumu

1. Açılacak bilgisayarda Node.js uygulaması yüklü olmalı eğer yüklü değilse `https://nodejs.org/en/download` linkinden yükleme işlemi yapabilirsiniz

2. Visual Studio Code ile programnın dosyalarını açtıktan sonra terminali açın sonra
   eğer ki node_modules klasörü yoksa
   önce`npm i` yazın sonrasında `node app.js` yazın eğer terminalde "port 3000 de servise açıldı" yazısı görürseniz diğer aşamaya geçin
   eğer ki node_modules klasörü varsa
   terminale `node app.js` yazın eğer terminalde "port 3000 de servise açıldı" yazısı görürseniz diğer aşamaya geçin

3. Uygulamanın çalıştığını "port 3000 de servise açıldı" yazısını görünce anlıyoruz site direk açılmayacaktır açmak için
   tarayıcınızda `http://localhost:3000/` adresine gidin ve siteyi artık görüntüleyebilirsiniz

---

## Proje Klasörleri ve Dosyaları

- app-server : MVC modelinin bulunduğu bölüm

  - controller : Sayfanın işlemlerinin bulunduğu bölüm
  - models : Veritabanı işlemlerinin bulunduğu bölüm
  - routes : Sayfa yönlendirmelerinin bulunduğu bölüm
  - views : ejs dosyalarının bulunduğun görsel arayüz bölümü

- node_modules : Express, ejs gibi modulleri kullanmak için gerekli dosyaların bulunduğu bölüm

- public : Kullanıcının erişebildiği bölüm

  - css : css dosyalarının bulunduğu bölüm
  - images : resim dosyalarının bulunduğu bölüm
  - js : js dosyalarının bulunduğu bölüm

- app.js : Uygulamanın başladığı bölüm
- package.json : Uygulama bilgilerinin bulunduğu bölüm
