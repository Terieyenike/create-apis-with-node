const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getOneFriend);
friendsRouter.post("/", friendsController.postNewFriend);

module.exports = friendsRouter;
