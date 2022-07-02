var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomNo2 = Math.floor(Math.random() * 6) + 1;

if (randomNo1 == randomNo2)
  document.querySelector(".container h1").textContent = "🎈 Draw 🎈";
else if (randomNo1 > randomNo2)
  document.querySelector(".container h1").textContent = "🎈Player 1 Wins";
else document.querySelector(".container h1").textContent = "Player 2 Wins 🎈";

//Two ways of doing this
var imgName = "images/dice" + randomNo1 + ".png";
document.querySelector("img.img1").setAttribute("src", imgName);

if (randomNo2 == 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (randomNo2 == 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if (randomNo2 == 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if (randomNo2 == 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if (randomNo2 == 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
} else if (randomNo2 == 6) {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}
