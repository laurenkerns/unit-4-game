
$(document).ready(function() {

    //wins
    var winCount = 0;
    $("#winsScore").text("Wins: " + winCount);

    //looses
    var loseCount = 0;
    $("#loseScore").text("Losses: " + loseCount);

    //user score
    var userScore = 0;

    //random numbers from 19-120 suing the random math generator
    var gameScore = Math.floor(Math.random() * 102) + 19;

    //Crystal 1 value number from 1-12
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    //Crystal 2 value number from 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    //Crystal 3 value number from 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    //Crystal 4 value number from 1-12
     var crystalFour = Math.floor(Math.random() * 12) + 1;

     //Show score using .text
     $("#gameScore").text("Game Score: " + gameScore);
     $("#userScore").text("User Score: " + userScore);

     console.log(gameScore);
     console.log(crystalOne);
     console.log(crystalTwo);
     console.log(crystalThree);
     console.log(crystalFour);

     //reset game
     function resetGame () {
         userScore = 0;
    // random beginning game score from 19-120     
         gameScore = Math.floor(Math.random() * 102) + 19;
    //Crystal 1 value number from 1-12
        crystalOne = Math.floor(Math.random() * 12) + 1;
    //Crystal 2 value number from 1-12
        crystalTwo = Math.floor(Math.random() * 12) + 1;
    //Crystal 3 value number from 1-12
        crystalThree = Math.floor(Math.random() * 12) + 1;
    //Crystal 4 value number from 1-12
        crystalFour = Math.floor(Math.random() * 12) + 1;
    
    //show score using .text
    $("#gameScore").text("Game Score: " + gameScore);
    $("#userScore").text("User Score: " + userScore);

    console.log(gameScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
    }


//if we win a game
function winGame(){
    alert("One point for you! play again!");
//adds a win
    winCount = winCount + 1;
//displays "wins"
    $("#winScore").text("Wins: " + winCount);
//reset the game
    resetGame();
}

//if we loose a game 
function loseGame() {
    alert("you loose! One Point for me!");
//add looses
    loseCount = loseCount + 1;
//displays "losses"
    $("#looseScore").text("Losses: " + loseCount);
//reset the game
resetGame();
}

//.onClick function 
const clickFunction = (id, crystalName ) => {
    $(id).click(function() {
        //adds value of crystal 1 to user score
                userScore = userScore + crystalName;
                console.log("User Score: " + typeof(userScore));
                console.log(gameScore);
                $("#userScore").text("User Score: " + userScore);
                if (userScore === gameScore) {
                    winGame();
                }
                else if (userScore > gameScore) {
                    loseGame();
            
                }
            });
};

clickFunction("#crystal1", crystalOne );
clickFunction("#crystal2", crystalTwo);
clickFunction("#crystal3", crystalThree);
clickFunction("#crystal4", crystalFour);

// //.onClick function for Crystal One
//     $("#crystal1").click(function() {
// //adds value of crystal 1 to user score
//         userScore = userScore + crystalOne;
//         console.log("User Score: " + typeof(userScore));
//         console.log(gameScore);
//         $("#userScore").text("User Score: " + userScore);
//         if (userScore === gameScore) {
//             winGame();
//         }
//         else if (userScore > gameScore) {
//             loseGame();
    
//         }
//     });
 
// //.onclick for crystal two
//     $("#crystal2").click(function() {
// //adds value of crystal 2 to user score
//         userScore = userScore + crystalTwo;
//          console.log("User Score: " + userScore);
//          $("#userScore").text("User Score: " + userScore);
//             if (userScore === gameScore) {
//                 winGame();
//             }
//             else if (userScore > gameScore) {
//                 loseGame();
//             }
//     });

// //.onclick for crystal 3
//     $("#crystal3").click(function() {
// //adds value of crystal 3 to user score
//         userScore = userScore + crystalThree;
//         console.log("User Score: " + userScore);
//          $("#userScore").text("User Score: " + userScore);
//             if (userScore === gameScore) {
//                 winGame();
//             }
//              else if (userScore > gameScore) {
//                 loseGame();
//              }
//     });

// //.onclick for crystal 4
//     $("#crystal4").click(function() {
//         //adds value of crystal 4 to user score
//             userScore = userScore + crystalFour;
//             console.log("User Score: " + userScore);
//             $("#userScore").text("User Score: " + userScore);
//                 if (userScore === gameScore) {
//                     winGame();
//                  }
//                 else if (userScore > gameScore) {
//                     loseGame();
//                 }
//     });


});