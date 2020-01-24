const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // Checking for Authorization header
    const authHeader= req.get("Authorization");
    if(!authHeader){
        const error= new Error("Authorization header missing");
        error.statusCode= 400;
        throw error;
    }

    const token = authHeader.split(" ")[1];

    let decodedtoken;

    // Verifying the token
    try {
        decodedtoken = jwt.verify(token, "United Remote Coding Challenge")
    } catch (err) {
        throw err
    }

    if(!decodedtoken){
        const error= new Error("Not authenticated");
        error.statusCode= 401;
        throw error;
    }
    
    //storing the userId in the request
    req.userId= decodedtoken.userId;

    // Forwarding the reqquest
    next();
}