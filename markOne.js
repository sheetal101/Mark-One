var readinput=require("readline-sync");
var colors=require("chalk");
const chalk = require("chalk");

var score=0;
var userName=readinput.question("enter you name: ")
console.log("Welcome !!!!", userName, "Do you know about Me!!! ")


other_Scores=[{Name:"Neelam", playerScore: "3"}, {Name: "Neeraj", playerScore:"2"}]

function playGame(question, answer){
    var userAns=readinput.question(question);
    if(userAns===answer) {
      console.log(chalk.green("Right !!!!"))
      score++
      console.log("you scored", score)
    }else{
      console.log(chalk.red(" Oppps........Wrong !"))
    }
    console.log("-------- ------")
  
} var questions=[{Que: "where do i live? ", Ans: "dehradun"}, 
 {Que:"What is my favroite sports?? ", Ans: "cricket"},
 {Que: "Your favroite novel? ", Ans: "The Alchemist"},
 {Que: "what's your Favourite Movie ? ", Ans: "Shershaah"}]

for(i of questions){
    playGame(i.Que, i.Ans)
}
if(score>0){
  console.log(chalk.green("Congratulations !!! your Total score is", score));
}
else{
  console.log(chalk.red("Game over\n Your total score is", score));
}
for(k of other_Scores){
  console.log(k.Name, "score is",k.playerScore);
} 
console.log("if you've beaten them by high score.._____.....send me Screenshot")

