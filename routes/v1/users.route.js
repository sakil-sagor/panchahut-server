const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");
// user create
router.route("/createuser").post(userController.createUser);
// find and get user
router.route("/login").post(userController.loginUser);

// get single  user
router.route("/userDetails/:phoneNumber").get(userController.getUser);

// get user for authprovider
router.route("/:phoneNumber").get(userController.getUser);

module.exports = router;
