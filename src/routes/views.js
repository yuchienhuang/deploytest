const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'src/views' });
});

router.get('/u/profile/', function (req, res) {
    res.sendFile('profile.html', { root: 'src/views' });
});

module.exports = router;