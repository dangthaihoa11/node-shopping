const express = require('express')
const router = express.Router();


router.get("/index", (req, res) => {
    var path = "products/main";
    res.render("index", { path });
});

module.exports = router;