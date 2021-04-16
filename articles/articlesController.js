const express = require('express');
const router = express.Router();

router.get('/article', (req, res) => {
    res.send('ROUTE ARTICLES')
});

router.get('/admin/article/create', (req, res) => {
    res.send('ROUTE CREATE NEW ARTICLES')
})

module.exports = router;