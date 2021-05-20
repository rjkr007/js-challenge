// challenge 1: your age in days
const clickMe = document.querySelector(".btn-primary");
const reset1 = document.querySelector(".btn-danger");

clickMe.addEventListener("click", daysAge);

function daysAge(age) {
  let birthYear = prompt("What year you were born?");
  let ageInDays = (2021 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old"
  );
  // h1.setAttribute('id', 'ageInDays');
  h1.id = "ageInDays";
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

reset1.addEventListener("click", reset);

function reset() {
  document.getElementById("ageInDays").remove();
}

const catGenerate = document.querySelector("#cat-generate");
catGenerate.addEventListener("click", catImage);

// challenge 2 - cat Image

function catImage() {
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  );
  document.getElementById("cat-gen").appendChild(img);
}

// Rock, Paper , Scissors - Challeng 3

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


function rpsGame(yourChoice) {
  // console.log(yourChoice);
  // console.log(yourChoice.src);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  // console.log("computerChoice:", botChoice);
  results = decideWinner(humanChoice, botChoice); //
  // console.log(results);
  message = finalMessage(results); //{'message': 'you Won', 'color': 'green'}
  // console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "Green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // remove images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);

messageDiv.innerHTML =
  "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>"
  imagesDatabase[botImageChoice] +
  "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
document.getElementById("flex-box-rps-div").appendChild(messageDiv);

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
  document.getElementById("flex-box-rps-div").appendChild(botDiv);

  
}


// challenge 4 - change color of buttons

var allButtons = document.getElementsByTagName('button');
// console.log(allButtons);


let copyAllButtons = [];
for (let i=0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}
// console.log(copyAllButtons);


function buttonColorChange(buttonThingy) {
if(buttonThingy.value === 'red') {
  buttonRed();
} else if (buttonThingy.value === 'green' ) {
  buttonGreen();
}  else if (buttonThingy.value === 'reset') {
  buttonReset();
} else if (buttonThingy.value === 'random'){
  buttonRandom();

}
}

function buttonRed() {
for (let i=0; i < allButtons.length; i++) {
  allButtons[i].classList.remove(allButtons[i].classList[1]);
  allButtons[i].classList.add('btn-danger');
}
}

function buttonGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
}

function buttonReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function buttonRandom () {
  let choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
  for (let i=0; i < allButtons.length; i++ ) {
    let randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }

}