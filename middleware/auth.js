const {getUser}= require ('../service/auth');


async function restrictoLoggedinUserOnly(req,res,next){
    const UserUid = req.cookies?.uid;
    if(!UserUid){
        return res.redirect('login');
    }
    const user= await getUser(UserUid)
    if(!user) return res.redirect("/login");

    req.user = user
    next();
}
module.exports= {
    restrictoLoggedinUserOnly
};