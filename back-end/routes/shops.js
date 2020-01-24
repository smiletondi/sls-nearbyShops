const router = require("express").Router();

const shopsController = require("../controllers/shops");
const isAuth = require("../_helpers/isAuth");

// /shops/ => GET
// router.get("/", isAuth, shopsController.getShops);
// /shops/preferredShops => GET
router.get("/preferredShops", isAuth, shopsController.getPreferredShops);
// /shops/nearbyShops => GET
router.get("/nearbyShops", isAuth, shopsController.getNearbyShops);

// /shops/:id => GET
// router.get("/:id", isAuth, shopsController.getShop);

// /shops/:id/like => POST
router.post("/:id/like", isAuth, shopsController.postLike);
// /shops/:id/remove => DELETE
router.delete("/:id/remove", isAuth, shopsController.postRemove);

// /shops/dislike => POST
router.post("/:id/dislike", isAuth, shopsController.postDislike);

module.exports = router;