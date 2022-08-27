const express = require('express')
const router = express.Router();

router.get("/index", (req, res) => {

    var path = "dashboards/main";

    res.render("index", { path });
});

module.exports = router;