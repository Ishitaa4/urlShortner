const express = require ('express');

const{handlecreateSignUp,handleUserLogin}= require("../controllers/user");
const router=express.Router();

router.post('/',handlecreateSignUp);
router.post('/login',handleUserLogin);


module.exports = router;