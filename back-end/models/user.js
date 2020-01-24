const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preferredShops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    }]
});

module.exports = mongoose.model("User", userSchema);