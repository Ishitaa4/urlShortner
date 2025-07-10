const shortid = require('shortid');
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });

    try {  
        const shortId = shortid.generate();
        const newEntry=await URL.create({
            shortId: shortId,
            redirectURL: body.url,
            visitedHistory: [],
        })
        console.log("New URL created",newEntry);
        const allUrls = await URL.find({});
        return res.render('home',
            { id: shortId ,
              urls: allUrls  
            });
    } catch (error) {  
        console.error("Error creating short URL:", error);
        return res.status(500).json({ error: "Internal server error" });
    }

}

    async function handleGetAnalytics(req,res) {
        const shortId = req.params.shortId;
        const result = await URL.findOne({shortId});
        return res.json({
            totalClick: result.visitedHistory.length,
            analytics: result.visitedHistory,
        });
    }


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
};