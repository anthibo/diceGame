 var randomNumber1 = Math.random() * 6;
 randomNumber1 = Math.floor(randomNumber1) + 1;
 var randomNumber2 = Math.random() * 6;
 randomNumber2 = Math.floor(randomNumber2) + 1;

 function diceNumber(randomN, x) {
   var dicePic = document.querySelector(".img" + x);
   if (randomN === 1) {
     dicePic.setAttribute("src", "images/dice1.png");
   } else if (randomN === 2) {
     dicePic.setAttribute("src", "images/dice2.png");
   } else if (randomN === 3) {
     dicePic.setAttribute("src", "images/dice3.png");
   } else if (randomN === 4) {
     dicePic.setAttribute("src", "images/dice4.png");
   } else if (randomN === 5) {
     dicePic.setAttribute("src", "images/dice5.png");
   } else {
     dicePic.setAttribute("src", "images/dice6.png");

   }
 }
 diceNumber(randomNumber1, 1);
 diceNumber(randomNumber2, 2);

 var text=document.querySelector("h1");
 if(randomNumber1===randomNumber2){
  text.innerHTML="Draw";

 }
 else if (randomNumber1>=randomNumber2) {
   text.innerHTML="Player1 Wins";

 }
 else{
   text.innerHTML="Player2 Wins";
 }
