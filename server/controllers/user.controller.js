const User = require ("../models/user.model");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const authConfig = require ("../configs/auth.config");

//Sign up Controller

exports.signup = async (req,res) => {

    try{
    
        //Create new user
        let user = await User.create({
            email:req.body.email,
            password:bcrypt.hashSync( req.body.password , 8 )
        })
        
        //Create response
        let newUser ={
            id:user._id,
            email:user.email,
        }

        return res.status(201).send(newUser);
        
    }
    catch(e){

        console.log(e.message);
        return res.status(500).send({
            message:"Internal Server Error while creating user!"
        })

    }
}

//Sign in Controller

exports.login = async (req,res) => {
    
    try{

        //Check User Email
        const user = await User.findOne({
            email:req.body.email
        })
        if(!user){
            return res.status(404).send({
                message:'Account does not exist'
            });
        }

        //Check Password
        const isPasswordValid = bcrypt.compareSync(req.body.password,user.password)

        if(!isPasswordValid){
            return res.status(401).send({
                message:'Invalid Password'
            });
        }

        //Token creation and expiry
        const token = jwt.sign({id:user._id},
            authConfig.secret,
            { expiresIn : 3600 }) // Token Expiry time is 3600 seconds
        
        const userId = user._id;

        //Resolved
        res.status(200).send({
        
            id:userId,
            email:user.email,
            accessToken:token
        
        })

    }
    
    catch(e){

        console.log(e.message);
        res.status(500).send({
            message:"Internal Server Error while signing in!"
        })
    }
}

//Bucket list controller
exports.getLikedMovies = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({ email });
      if (user) {
        return res.json({ msg: "success", movies: user.likedMovies });
      } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
      return res.json({ msg: "Error fetching movies." });
    }
  };
  
exports.addToLikedMovies = async (req, res) => {
    try {
      const { email, data } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const { likedMovies } = user;
        const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
        if (!movieAlreadyLiked) {
          await User.findByIdAndUpdate(
            user._id,
            {
              likedMovies: [...user.likedMovies, data],
            },
            { new: true }
          );
        } else return res.json({ msg: "Movie already added to the liked list." });
      } else await User.create({ email, likedMovies: [data] });
      return res.json({ msg: "Movie successfully added to liked list." });
    } catch (error) {
      return res.json({ msg: "Error adding movie to the liked list" });
    }
  };
  
exports.removeFromLikedMovies = async (req, res) => {
    try {
      const { email, movieId } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const movies = user.likedMovies;
        const movieIndex = movies.findIndex(({ id }) => id === movieId);
        if (!movieIndex) {
          res.status(400).send({ msg: "Movie not found." });
        }
        movies.splice(movieIndex, 1);
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: movies,
          },
          { new: true }
        );
        return res.json({ msg: "Movie successfully removed.", movies });
      } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
      return res.json({ msg: "Error removing movie to the liked list" });
    }
  };
  