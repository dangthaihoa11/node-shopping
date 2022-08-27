const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    var path = 'categories/main'
    res.render('index', {path})
});

module.exports = router;