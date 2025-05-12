const express = require("express");
const ejsLayout = require("express-ejs-layouts");
const kRoute = require("./app-server/routes/kitapRoutes");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app-server/views"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(ejsLayout);

app.use("/", kRoute);

app.use((req, res, next) => {
  res.status(404).render("hata", { url: req.originalUrl });
});

app.listen(3000, () => {
  console.log("port 3000 de servise açıldı");
});
