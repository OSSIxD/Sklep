const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('index')
})
router.get('/stworz', function (req, res) {
    res.render('stworz')
})
router.get('/glowna', function (req, res) {
    res.render('glowna')
})

module.exports = router