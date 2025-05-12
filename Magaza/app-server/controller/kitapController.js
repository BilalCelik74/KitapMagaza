const model = require("../models/kitapModels");

exports.home = (req, res) => {
  model.gosterKitap(true, (err, kitaplar) => {
    if (err) {
      return res.status(500).send("Veriler Gönderilemedi.");
    }
    res.render("index", { kitaplar });
  });
};

exports.kitapListe = (req, res) => {
  const dturu = req.params.turu;
  const gecerliTurler = ["roman", "hikaye", "biyografi", "din"];

  if (!gecerliTurler.includes(dturu)) {
    return res.status(404).render("hata", { url: req.originalUrl });
  }

  model.gosterKitapTuru(dturu, (err, kitaplar) => {
    if (err) return res.status(500).send("Romanlar Yüklenemedi");
    res.render("kitapListe", { kitaplar, turu: dturu });
  });
};

exports.kitapDetay = (req, res) => {
  const resimUrl = req.params.resimUrl;
  model.gosterKitapId(resimUrl, (err, kitap) => {
    if (err || !kitap)
      return res.status(404).render("hata", { url: req.originalUrl });
    res.render("kitapDetay", { kitap });
  });
};

exports.satinAlForm = (req, res) => {
  const resimUrl = req.params.resimUrl;
  model.gosterKitapId(resimUrl, (err, kitap) => {
    if (err || !kitap)
      return res.status(404).render("hata", { url: req.originalUrl });
    res.render("satinAl", { kitap });
  });
};

exports.satinAl = (req, res) => {
  const resimUrl = req.params.resimUrl;
  const { ad, email, adres, adet } = req.body;
  const satilanAdet = parseInt(adet);

  if (!ad || !email || !adres || !adet) {
    return res.status(500).send("Bütün Bilgileri Doldurunuz");
  }

  model.gosterKitapId(resimUrl, (err, kitap) => {
    if (err || !kitap)
      return res.status(404).render("404", { url: req.originalUrl });

    const kalanAdet = kitap.adet - satilanAdet;
    const toplamFiyat = kitap.fiyat * satilanAdet;

    if (kalanAdet > 0) {
      model.guncelleAdet(kitap.id, kalanAdet, (err) => {
        if (err) return res.status(500).send("Kitabın Adedi Güncellenemedi");
        res.render("siparisSonuc", {
          ad,
          kitap,
          adet: satilanAdet,
          toplamFiyat,
        });
      });
    } else {
      model.silKitap(kitap.id, (err) => {
        if (err) return res.status(500).send("Adedi Kalmayan Kitap Silinemedi");
        res.render("siparisSonuc", {
          ad,
          kitap,
          adet: satilanAdet,
          toplamFiyat,
        });
      });
    }
  });
};

exports.ayar = (req, res) => {
  model.hepsi((err, rows) => {
    if (err) {
      return res.status(500).send("Veriler Gönderilemedi.");
    } else {
      res.render("kitapAyarlama", { liste: rows });
    }
  });
};

exports.eklemeForm = (req, res) => {
  res.render("kitapEkle");
};

exports.ekleKitap = (req, res) => {
  const { ad, turu, yazari, sayfaSayisi, resimUrl, yazi, konu, fiyat, adet } =
    req.body;
  const isHome = req.body.isHome ? 1 : 0;

  if (
    !ad ||
    !turu ||
    !yazari ||
    !sayfaSayisi ||
    !resimUrl ||
    !yazi ||
    !konu ||
    !fiyat ||
    !adet
  ) {
    return res.status(400).send("Veriler Eksik");
  }

  model.ekleKitap(
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
    (err) => {
      if (err) return res.status(500).send("Kitap Eklenmedi.");
      res.redirect("/kitapAyarlama");
    }
  );
};

exports.duzenleForm = (req, res) => {
  const id = req.params.id;
  model.duzenleForm(id, (err, row) => {
    if (err) return res.status(500).send("Veritabanı Hatası");
    res.render("kitapDuzenle", { kitap: row });
  });
};

exports.duzenleKitap = (req, res) => {
  const id = req.params.id;
  const { ad, turu, yazari, sayfaSayisi, resimUrl, yazi, konu, fiyat, adet } =
    req.body;
  const isHome = req.body.isHome ? 1 : 0;
  model.duzenleKitap(
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
    id,
    (err) => {
      if (err) return res.status(500).send("VeriTabanı Hatası");
      res.redirect("/kitapAyarlama");
    }
  );
};

exports.silKitap = (req, res) => {
  const id = req.params.id;
  model.silKitap(id, (err) => {
    if (err) return res.status(500).send("Kitap Silinmedi.");
    res.redirect("/kitapAyarlama");
  });
};
