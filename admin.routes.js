const path = require('path');
const express = require('express');
const { postAddCategory, getAllCategory } = require('../controllers/catergory.controller');
const { getAllBrand, postAddBrand, postEditBrand, postDeleteBrand } = require('../controllers/brand.controller');
const router= express.Router();

// API ROUTE FOR CATEGORY
router.get('/get', getAllCategory);
router.post('/add-catergory', postAddCategory);
// CRUD API ROUTES FOR BRAND 
router.get('/getbrands', getAllBrand);
router.post('/addbrand',postAddBrand);
router.post('/updatebrand',postEditBrand);
router.post('/Deletebrand',postDeleteBrand);

module.exports = router;