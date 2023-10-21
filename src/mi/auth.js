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

   if (permi == 0) {
      console.log('administrador')

      // É um administrador
      console.log("resultado:",decoded)
      req.session = decoded;

  } else if (permi == 1) {
      console.log('cliente')
      // É um cliente
      req.session = decoded;
      console.log("resultado:",req.session)

  } else if (permi == 2) {
      console.log('atendente')
      // É um atendente
      req.session = decoded;
      req.isAtendente = true;
      next();
  } else {
      return res.status(403).json({ message: 'Permissão inválida' });
  }



    console.log("resultado:",decoded)
    req.session = decoded;
    next();
  });


}

module.exports = autoMiddleware;
