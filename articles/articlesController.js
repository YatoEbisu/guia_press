const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('ROUTE ARTICLES')
});

router.get('/admin/articles/create', (req, res) => {
    res.send('ROUTE CREATE NEW ARTICLE')
})

module.exports = router;