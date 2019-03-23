var friends = require("../data/friends.js");

module.exports = function(app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
  
    // Create new friend/user
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        
        // console.log(userData.answers);

        // Convert all of the user's answers to integers so we can do math
        for (var i=0; i<userData.answers.length; i++) {
            userData.answers[i] = parseInt(userData.answers[i]);
        };

        // console.log(userData.answers);

        // Max possible difference from all 10 answers is 40, using this as basis for comparison
        var maxPossDiff = 40;

        // Declare best match info empty to start with
        var bestMatchName = "";
        var bestMatchPhoto = "";

        // This loop goes through all of the friends in the array to compare answers
        for (var i=0; i<friends.length; i++) {
            var diff = 0;
            
            // Run a loop for all 10 answers and get absolute value of difference between user answer and friend[i]
            for (var j=0; j<userData.answers.length; j++) {
                
                diff += Math.abs(friends[i].answers[j] - userData.answers[j]);
                
            };
            
            // console.log(diff);

            // If the difference of the current index is less than maxPossDiff, set maxPossDiff to that diff
            if (diff < maxPossDiff) {
                maxPossDiff = diff;
                // console.log(diff)
                bestMatchName = friends[i].name;
                bestMatchPhoto = friends[i].photo;
            };
        };

        
        // console.log(bestMatchName);
        // console.log(bestMatchPhoto);
        // console.log(friends);
       
        friends.push(userData);

        // Send response
        res.json({bestMatchName, bestMatchPhoto});
    });
  
  };