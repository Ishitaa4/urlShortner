const express = require("express");
const urlRoute =require('./routes/url');
const userRoute = require('./routes/user');
const connectToMongoDB=require('./connect');
const URL =require('./models/url');
const User = require('./models/user');
const staticRoute = require('./routes/staticRouter');
const {restrictoLoggedinUserOnly} =require('./middleware/auth')
const cookieParser = require('cookie-parser');

const path = require("path");
const app=express();
const PORT= 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url");


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json()); 
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use("/url",restrictoLoggedinUserOnly, urlRoute);
app.use("/", staticRoute);
app.use("/user",userRoute);


app.get('/:shortId',async(req,res) =>{
    try{
     const shortId = req.params.shortId;
    const entry =await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
        visitedHistory:{
            timestamp:Date.now(),
        },
    },
    },
); 
if (!entry) {
      return res.status(404).render('404', { message: "URL not found" });
    }
res.redirect(entry.redirectURL);
}catch (error) {
    console.error("Redirect error:", error);
    return res.status(500).render('error', { message: "Server error" });
  }
});
app.listen(PORT,()=>
    console.log(`Server started at port :${PORT}`)
);