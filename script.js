let userScore = 0;
let compScore = 0;

let m = document.querySelector(".msg");

let uScore = document.querySelector("#your-score");
let cScore = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");
const generate = ()=>{
  const options = ["rock","paper","scissors"];
  let r = Math.floor(Math.random()*3);
  return options[r];
}

const drawMsg = () =>{
  console.log("Draw");
  m.innerText = "Draw";
  m.style.backgroundColor ="#081b31";
}
const showWinner = (userWin)=>{
  if(userWin === true){
    userScore++;
    uScore.innerText = userScore;
    m.innerText = "You Win";
    m.style.backgroundColor = "green";
  }else{
    compScore++;
    cScore.innerText = compScore;
    m.innerText = "You Lose";
    m.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) =>{
  console.log("user clicked ",userChoice);
  const compChoice = generate();
  console.log("comp clicked ",compChoice);
  let userWin = true;
  if(userChoice === compChoice){
    drawMsg();
  }else{
    
    if(userChoice === "rock"){
      userWin = compChoice === "paper"?true:false;
    }else if(userChoice === "paper"){
      userWin = compChoice === "rock"?true:false;
    }else{
      userWin = compChoice === "paper"?true:false;
    }
    showWinner(userWin);
  }
  
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
