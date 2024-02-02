// controllers/urlController.js
const ShortUrl = require('../models/shortUrl');

exports.getAllShortUrls = async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.json(shortUrls);
}

exports.createShortUrl = async (req, res) => {
    const shortUrl = await ShortUrl.create({full: req.body.fullUrl});
    res.json(shortUrl);
}



