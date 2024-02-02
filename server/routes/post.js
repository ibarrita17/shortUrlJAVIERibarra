// routes/post.js
const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlcontroller');


router.get('/', urlController.getAllShortUrls);

router.post('/shortUrls', urlController.createShortUrl);


module.exports = router;