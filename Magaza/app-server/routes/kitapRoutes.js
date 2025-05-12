const express = require("express");
const router = express.Router();
const controller = require("../controller/kitapController");

router.get("/", controller.home);

/*router.get("/kitapAyarlama", controller.ayar);

router.get("/kitapAyarlama/kitapEkle", controller.eklemeForm);
router.post("/kitapAyarlama", controller.ekleKitap);

router.get("/kitapAyarlama/:id/kitapDuzenle", controller.duzenleForm);
router.put("/kitapAyarlama/:id", controller.duzenleKitap);

router.delete("/kitapAyarlama/:id", controller.silKitap);*/

router.get("/:turu", controller.kitapListe);
router.get("/:turu/:resimUrl", controller.kitapDetay);

router.get("/:turu/:resimUrl/satinAl", controller.satinAlForm);
router.post("/:turu/:resimUrl/satinAl", controller.satinAl);

module.exports = router;
