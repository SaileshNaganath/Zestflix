const User = require ("../models/user.model");

//Check if it is a valid email
const isValidEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

}

//Check valid 
const validateSignUp = async(req,res,next)=>{
   

    //Check Valid email
    if(!isValidEmail(req.body.email)){
        return res.status(400).send({
            message:"Invalid email address!"
        })
    }
    
        //Check email already exist
        const userEmail = await User.findOne({
            email:req.body.email
        })
        if(userEmail){
            return res.status(401).send({
                message:'Signing Up Failed! Email already exist!'
            });
        }

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



const verifySignUp = { validateSignUp : validateSignUp }

module.exports = verifySignUp;