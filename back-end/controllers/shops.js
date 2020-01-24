const ObjectId = require("mongoose").Types.ObjectId;

const Shop = require("../models/shop");
const User = require("../models/user");
const connectToDB = require("../_helpers/dbConfig");

(async ()=>{await connectToDB()})();


// getShops
// module.exports.getShops = async (req, res, next) => {
//     const shopList = await Shop.find();
//     res.status(200).json(shopList);
// }

// getShop
// module.exports.getShop = (req, res, next) => {
//     const {
//         id
//     } = req.params;
//     console.log(id);
//     res.status(200).json({
//         id,
//         distance: 5,
//         name: "Aswak Salam",
//         imageUrl: "https://picsum.photos/200?random=1"
//     });
// }

// getNearbyShops
module.exports.getNearbyShops = async (req, res, next) => {
    // await connectToDB();
    const {
        userId
    } = req;

    const shopList = await Shop.find();

    User.findById(userId).then(user => {
        const {
            preferredShops
        } = user;
        // Filtering preferredShops from nearbyShops
        const finalList = shopList.filter(item => !preferredShops.includes(item._id));

        // Sorting by distance
        finalList.sort((a, b) => a.distance - b.distance)

        res.status(200).json(finalList);
    }).catch((err) => {
        console.log(err);
        const error = new Error("User Not Found, Fetching shops failed");
        error.statusCode = 404;

        next(error);
    })
}

// getPreferredShops
module.exports.getPreferredShops = async (req, res, next) => {
    // await connectToDB();
    const {
        userId
    } = req;

    User.findById(userId).populate("preferredShops").then(user => {
        res.status(200).json(user.preferredShops.sort((a, b) => a.distance - b.distance));
    }).catch(() => {
        const error = new Error("User No Found, Fetching shops failed");
        error.statusCode = 404;

        next(error);
    })
}

// postLike
module.exports.postLike = async (req, res, next) => {
    // await connectToDB();
    const {
        params: {
            id
        },
        userId
    } = req;

    User.findById(userId).then(user => {
        if (user.preferredShops.includes(ObjectId(id))) {
            const error = new Error("Shop Already exist in preferredShops")
            throw error;
        }
        return User.updateOne({
            email: user.email
        }, {
            preferredShops: [
                ...user.preferredShops,
                ObjectId(id)
            ]
        });
    }).then(rez => {
        console.log("Shop liked, User updated");

        res.status(200).json({
            message: "i liked the shop " + id
        });
    }).catch((err) => {
        // console.log(err);
        const error = new Error("User Not Found");
        error.statusCode = 404;

        next(err);

    })
}
// postRemove
module.exports.postRemove = async (req, res, next) => {
    // await connectToDB();
    const {
        params: {
            id
        },
        userId
    } = req;
    console.log(userId);
    console.log(id);

    User.findById(userId).then(user => {
        if (!user.preferredShops.includes(ObjectId(id))) {
            const error = new Error("Shop doesn't exist in preferredShops")
            throw error;
        }

        const newPreferredShops = user.preferredShops.filter(item => !item.equals(ObjectId(id)));

        return User.updateOne({
            email: user.email
        }, {
            preferredShops: newPreferredShops
        });
    }).then(rez => {
        console.log("Shop removed, User updated");

        res.status(200).json({
            message: "i removed the shop " + id
        });
    }).catch((err) => {
        // console.log(err);
        const error = new Error("User Not Found");
        error.statusCode = 404;

        next(err);

    })
}

// postDislike
module.exports.postDislike = async (req, res, next) => {
    // await connectToDB();
    const {
        id
    } = req.params;
    const data = req.body;
    console.log("Shop disliked, not touching the DB, only changing the UI");
    res.status(200).json({
        message: "i don't like the shop " + id,
        data
    });
}