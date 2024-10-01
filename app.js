let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice =()=>{
    const options = ["rock", "paper", "scissors"];         //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);         //this generate a random number between 0 and 2
    return options[randIdx];

}

const playGame =(userChoice)=>{
    console.log("user choice is equal to ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is equal to", compChoice);
    //generate computer choice

    if(userChoice === compChoice){
        drawGame();
        //draw game
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else if(userChoice ==="paper"){
            if(compChoice === "rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            if(compChoice === "rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const drawGame =()=>{
    console.log("game was draw");
    msg.innerText = ("Game was Draw. Play Again!");
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You won!");
        msg.innerText = (`You Win! Your ${userChoice} beats computer's ${compChoice}`);
        msg.style.backgroundColor = "green";
        ++userScore;
        userScorePara.innerText = userScore;

    }else{
        console.log("Computer won!");
        msg.innerText = (msg.innerText = (`You Lost! Computer's ${compChoice} beats your ${userChoice}`));
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})