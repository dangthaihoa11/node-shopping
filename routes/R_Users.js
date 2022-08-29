const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
    var path = 'users/main'
    res.render('index', {path})
});

router.get('/add', (req, res) => {
    var path = 'users/form'
    res.render('index', {path})
});

router.get('/edit/:id', (req, res) => {
    var path = 'users/form'
    res.render('index',     {path})
});
module.exports = router;