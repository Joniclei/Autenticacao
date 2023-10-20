const jwt = require('jsonwebtoken');
const config = require('../config');

function autoMiddleware (req,res,next){

  const token = req.headers['autorization']

  if(!token){
    return res.status(401).json({auth:false,message:'Autorização negada'})
  }
  jwt.verify(token,config.secrect,(err,decoded)=>{
    if(err){
      return res.status(401).json({message:'Autorizacao Negada'})
    }
    console.log(decoded)
    req.session = decoded;
    next();
  })

}

module.exports = autoMiddleware;
