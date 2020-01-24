const {
    validationResult
} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const connectToDB = require("../_helpers/dbConfig");

(async ()=>{
    console.log("connect i called")
    await connectToDB();
})();

// SignIn
module.exports.postSignin = async (req, res, next) => {

    const {
        email,
        password
    } = req.body;
    let loadedUser;

    User.findOne({
        email
    }).then(userFound => {
        //Checking if the user exist
        if (!userFound) {
            const error = new Error("User Not found")
            error.statusCode = 404;
            throw error;
        }
        loadedUser = userFound;

        // comparing passwords
        return bcrypt.compare(password, userFound.password);
    }).then(isEqual => {
        // Checkking if ppasswords are equals
        if (!isEqual) {
            const error = new Error("Wrong Password");
            error.statusCode = 401;
            throw error;
        }
        const userId = loadedUser._id.toString();

        // creating the token
        const token = jwt.sign({
                email: loadedUser.email,
                userId
            }, "United Remote Coding Challenge",
            // {
            //     expiresIn: "1h",
            // }
        );

        console.log("User connected");
        return res.status(200).json({
            token,
            userId
        })

    }).catch(err => next(err));
}
// SignUp
module.exports.postSignup = async (req, res, next) => {

    const errors = validationResult(req);

    // Checking if errors exist
    if (!errors.isEmpty()) {
        let error = new Error("Validation failed");
        error = {
            ...error,
            statusCode: 422,
            data: errors.array()[0]
        }

        throw error;
    }

    // Destructing email and password
    const {
        email,
        password
    } = req.body;
    // hashing password
    bcrypt.hash(password, 10)
        .then(hashedPass => {
            const user = new User({
                email,
                password: hashedPass
            });

            return user.save();
        }).then(rez => {
            console.log("User created");
            return res.status(201).json({
                message: "User created successfully",
                user: rez
            });
        }).catch(err => next(err));
}