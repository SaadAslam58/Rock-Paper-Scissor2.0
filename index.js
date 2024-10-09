let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const button = document.querySelector("#mode");
let body = document.querySelector("body")
let Para = document.querySelector('p');

const drawGame = () => {
  msg.innerText = "Game Was A Draw";
  msg.style.backgroundColor = "black";
  msg.style.color = "white";
};

const showWinner = (userChoice, compChoice, userWin) => {
  if (userWin) {
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comp.innerText = compScore;
    msg.innerText = `You Loose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate Computer Choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
  if (userChoice === "Rock") {
    userWin = compChoice === "Paper" ? false : true;
  } else if (userChoice === "Paper") {
    userWin = compChoice === "Scissor" ? false : true;
  } else {
    userWin = compChoice === "Rock" ? false : true;
  }
  showWinner(userChoice, compChoice, userWin);
  }
};

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const Idx = Math.floor(Math.random() * 3);
  return options[Idx];
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("You Clicked", userChoice);
    playGame(userChoice);
  });
});

let currMode = 'default';
mode.addEventListener("click", () => {
if (currMode === 'default'){
    currMode = 'Change';
    body.classList.add("Theme")
    msg.style.backgroundColor = "aliceblue"
    msg.style.color = 'black'
} else {
   currMode = 'default';
    body.classList.remove("Theme")
    msg.style.backgroundColor = "black"
    msg.style.color = 'white'
}
console.log(currMode)
})



