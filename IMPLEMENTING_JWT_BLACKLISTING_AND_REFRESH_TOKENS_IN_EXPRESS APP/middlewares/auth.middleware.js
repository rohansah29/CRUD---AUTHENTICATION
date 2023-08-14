const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const {token}=req.query
    jwt.verify(token,"masai",(err,decoded)=>{
        if(decoded){
            next();
        }else{
            res.send(err)
        }
    })
}

module.exports={
    auth
}