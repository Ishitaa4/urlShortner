 const express=require('express');
 const URL =require('../models/url');
 const user =  require ('../models/user');
 const router=express.Router();

router.get("/",async(req,res) =>{
    const allurls= await URL.find({})
    return res.render('login');
    
    
});
router.get("/signup",(req,res)=>{
    return res.render('SignUp')
});
router.get("/login",(req,res)=>{
    return res.render('login')
});
 module.exports= router;  