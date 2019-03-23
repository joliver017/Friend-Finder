var friends = require("../data/friends.js");

module.exports = function(app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
  
    // Create new friend/user
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        // res.send(userData);
        console.log(userData.answers);

        for (var i=0; i<userData.answers.length; i++) {
            userData.answers[i] = parseInt(userData.answers[i]);
        };

        console.log(userData.answers);

        var maxPossDiff = 40;
        var bestMatchName = "";
        var bestMatchPhoto = "";

        for (var i=0; i<friends.length; i++) {
            var diff = 0;
            
            for (var j=0; j<userData.answers.length; j++) {
                
                diff += Math.abs(friends[i].answers[j] - userData.answers[j]);
                
            };
            
            // console.log(diff);

            if (diff < maxPossDiff) {
                maxPossDiff = diff;
                console.log(diff)
                bestMatchName = friends[i].name;
                bestMatchPhoto = friends[i].photo;
            };
        };

        
        console.log(bestMatchName);
        console.log(bestMatchPhoto);
       
        friends.push(userData);
        console.log(friends);
        res.json({bestMatchName, bestMatchPhoto});
    });
  
  };