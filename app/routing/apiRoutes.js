var friends = require("../data/friends.js");

module.exports = function(app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
  
    // Create new friend/user
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        res.send(newFriend)
        console.log(newFriend);
        friends.push(newFriend);
        console.log(friends);
    });
  
  };