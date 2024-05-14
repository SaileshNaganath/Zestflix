const jwt = require ('jsonwebtoken');
const authConfig = require ("../configs/auth.config");


//Verifying Token 
const verifyToken = (req,res,next) =>{
    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({
            message:"Token not provided"
        })
    }

    jwt.verify(token,authConfig.secret,
        (err,decoded)=>{
            if(err){
                return res.status(401).send({
                    message: "Unauthorized!"
            })
            }
            req.userId = decoded.id;
            next();
        })
}



const isPasswordValid = async (req,res,next)=>{
        // Password validation: Minimum length
        if (req.body.password.length < 8) {
            return res.status(400).send({
                message: 'Password must be at least 8 characters long.'
            });
        }

        // Password validation: Contains at least one number and one symbol
        const containsNumberAndSymbol = /(?=.*\d)(?=.*[!@#$%^&*])/.test(req.body.password);
        if (!containsNumberAndSymbol) {
            return res.status(400).send({
                message: 'Password must contain at least one number and one symbol.'
            });
        }

        next();

}

const authJwt = {
    verifyToken : verifyToken,
    isPasswordValid:isPasswordValid
}

module.exports = authJwt;