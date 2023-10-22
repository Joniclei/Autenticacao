const jwt = require('jsonwebtoken');
const config = require('../config');





function autoMiddleware (req,res,next){

  const token = req.headers['autorization']



  if(!token){
    return res.status(401).json({auth:false,message:'Autorização negadaaa',token:'token'})
  }

  jwt.verify(token,config.secrect, (err,decoded)=>{
    if(err){
      return res.status(401).json({message:'Autorizacao Negada'})
    }

    const permi = decoded.permissao

    console.log("asdasd",permi)


    console.log("resultado:",decoded)
    req.session = decoded;
    next();
  });


}

module.exports = autoMiddleware;
