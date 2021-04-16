const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
    res.send('ROUTE CATEGORIES')
});

router.get('/admin/categories/create', (req, res) => {
    res.send('ROUTE CREATE NEW CATEGORIE')
})

module.exports = router;