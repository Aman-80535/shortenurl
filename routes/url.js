const express = require("express")
const router =  express.Router();
const { handelGenerateNewShortURL, handleGetAnalytics } = require('../controllers/url')

router.post('/', handelGenerateNewShortURL);
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports =  router;