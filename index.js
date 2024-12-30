const express = require("express");
const urlRoute = require("./routes/url")
const {connectToMongoDB} = require("./connect")
const URL = require("./models/url")


const app = express();
connectToMongoDB('mongodb+srv://Aman:Aman%402222@aman.hu3wz.mongodb.net/?retryWrites=true&w=majority&appName=Aman')

.then(() => console.log("MongoDb connected"))
app.use(express.json())
const PORT = 8001;
app.use("/url", urlRoute)
app.get('/:shortId', async (req, res) => {
    const shortID = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            VisitHistory: {
        timestamp: Date.now(),
    },
},
}
);
res.redirect(entry.redirectURL)
}

)
app.listen(PORT, ()=> console.log('Server starteda at PORT'))





