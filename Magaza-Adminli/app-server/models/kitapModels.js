const sqlite = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../../database.db");
const db = new sqlite.Database(dbPath);

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS kitap( id INTEGER PRIMARY KEY AUTOINCREMENT, ad TEXT NOT NULL, turu TEXT NOT NULL, yazari TEXT NOT NULL, sayfaSayisi INTEGER NOT NULL, resimUrl TEXT NOT NULL, yazi TEXT NOT NULL, konu TEXT NOT NULL, fiyat INTEGER NOT NULL, adet INTEGER NOT NULL,isHome BOOLEN NOT NULL)"
  );
});

module.exports = {
  gosterKitap(isHome, callback) {
    db.all("SELECT * FROM kitap WHERE isHome = ?", [isHome], callback);
  },
  gosterKitapId(resimUrl, callback) {
    db.get("SELECT * FROM kitap WHERE resimUrl = ?", [resimUrl], callback);
  },
  gosterKitapTuru(turu, callback) {
    db.all("SELECT * FROM kitap WHERE turu = ?", [turu], callback);
  },
  guncelleAdet(id, yeniadet, callback) {
    db.run("UPDATE kitap SET adet = ? WHERE id = ?", [yeniadet, id], callback);
  },
  hepsi(callback) {
    db.all("SELECT * FROM kitap", [], callback);
  },
  ekleKitap(
    ad,
    turu,
    yazari,
    sayfaSayisi,
    resimUrl,
    yazi,
    konu,
    fiyat,
    adet,
    isHome,
    callback
  ) {
    db.run(
      "INSERT INTO kitap (ad,turu,yazari,sayfaSayisi,resimUrl,yazi,konu,fiyat,adet,isHome) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        ad,
        turu,
        yazari,
        sayfaSayisi,
        resimUrl,
        yazi,
        konu,
        fiyat,
        adet,
        isHome,
      ],
      callback
    );
  },
  duzenleForm(id, callback) {
    db.get("SELECT * FROM kitap WHERE id = ?", [id], callback);
  },
  duzenleKitap(
    ad,
    turu,
    yazari,
    sayfaSayisi,
    resimUrl,
    yazi,
    konu,
    fiyat,
    adet,
    isHome,
    kId,
    callback
  ) {
    db.run(
      "UPDATE kitap SET ad = ?, turu = ?, yazari = ?, sayfaSayisi = ?, resimUrl = ?, yazi = ?, konu = ?, fiyat = ?, adet = ?, isHome = ? WHERE id = ?",
      [
        ad,
        turu,
        yazari,
        sayfaSayisi,
        resimUrl,
        yazi,
        konu,
        fiyat,
        adet,
        isHome,
        kId,
      ],
      callback
    );
  },
  silKitap(id, callback) {
    db.run("DELETE FROM kitap WHERE id = ?", [id], callback);
  },
};
