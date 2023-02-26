const model = require('../models/friends.model');

function getFriends(req, res) {
  res.json(model);
}

function getOneFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];

  if (!friend) {
    res.status(404).json({ error: 'Friend does not exist' });
  } else {
    res.status(200).json(friend);
  }
}

function postNewFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriends,
  getOneFriend,
  postNewFriend,
};
