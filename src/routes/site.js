//để quản lí những cái router liên quan tới thằng news
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;