const path = require("path");
const router = require("express").Router();

router.get("/*", (req, res, next) => {
  const routePath = path.join(__dirname + "..", "..", "public/" + "index.html");
  res.sendFile(routePath);
});

module.exports = router;
