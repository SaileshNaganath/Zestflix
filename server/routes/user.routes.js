const userController = require ("../controllers/user.controller");
const { validateSignUp } = require("../middlewares/verifySignUp");

module.exports = function (app){

    app.post('/api/auth/signup',[validateSignUp],userController.signup);
    app.post('/api/auth/login',userController.login);
    app.get("/api/liked/:email", userController.getLikedMovies);
    app.post("/api/add", userController.addToLikedMovies);
    app.put("/api/remove", userController.removeFromLikedMovies);
}