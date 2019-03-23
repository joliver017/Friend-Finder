var friends = require("../data/friends.js");

module.exports = function(app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
  
    // Create new friend/user
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        res.send(userData);
        console.log(userData.answers);

        for (var i=0; i<userData.answers.length; i++) {
            userData.answers[i] = parseInt(userData.answers[i]);
        }

        console.log(userData.answers);



        friends.push(userData);
        console.log(friends);
    });
  
  };