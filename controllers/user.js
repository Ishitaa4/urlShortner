const {v4:uuidv4}= require('uuid');
const User = require("../models/user");
const URL =require('../models/url');
const {setUser}= require("../service/auth");

async function handlecreateSignUp(req, res) {
    try {
        const { name, email, password } = req.body;

        await User.create({
            name,
            email,
            password,
        });

        return res.render('Login');  
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function handleUserLogin(req, res) {
    console.log("Login attempt:", req.body); 
        const {  email, password } = req.body;

        const user=await User.findOne({
            email,
            password,
        });
        const allurls= await URL.find({});
        if(!user)
           return res.render('SignUp')
        {
            error:"Invalid username or password"
           }
    
        
        const sessionId= uuidv4();
         console.log("Generated session ID:", sessionId)
        setUser(sessionId, user);
        res.cookie("uid" , sessionId);
        console.log("Cookie should be set now")
        return res.render('home',{
        
        urls :allurls ,
    });
}
module.exports = {
    handlecreateSignUp,
    handleUserLogin
};
