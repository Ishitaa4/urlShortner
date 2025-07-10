const mongoose= require('mongoose');


//schema
const urlSchema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    }, 
    visitedHistory:[
        {
        timestamp:{type:Number},
        },

    ],
})

//model
const URL=mongoose.model("URL",urlSchema, "urls");
module.exports=URL;