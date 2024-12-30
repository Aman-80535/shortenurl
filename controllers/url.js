const shortid = require("shortid")
const URL = require('../models/url')

async function handelGenerateNewShortURL( req, res ) {
    const body = req.body;
    if(!body.url) return res.status(404).json("URl is required!")
    const shortID = shortid();
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [], 
    });

    return res.json({ id: shortID })
} 


async function handleGetAnalytics(req, res) {
    console.log("dewdwe");
    const shortID = req.params.shortId;

    const result = await URL.findOne({shortID}); 
    return res.json({ totalClicks: result.VisitHistory.length,
        analytics: result.VisitHistory,
     }) 
}

module.exports = {
        handelGenerateNewShortURL,
        handleGetAnalytics
}