var express = require('express');
var router = express.Router();
const {
  body
} = require("express-validator");

const indexController = require("../controllers/index");
const User= require("../models/user");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("COding challenge API");
});

// /signin  => POST
// i don't use validation here because i will the email and password anyway
router.post("/signin", indexController.postSignin);

// /signup  => POST
    const signupChecks = [
      body("email").isEmail().withMessage("Please enter a valid email")
        .custom((value, {req})=>{
          return User.findOne({email:value}).then(user=>{
            if (user){
              return Promise.reject("Email already exist");
            }
          });
        })
        .normalizeEmail(),
        body("password").trim()
          .isLength({min: 5}).withMessage("Password should be at least 5 characters")
    ]
router.post("/signup", signupChecks, indexController.postSignup);

module.exports = router;