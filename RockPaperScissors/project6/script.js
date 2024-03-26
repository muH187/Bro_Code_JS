const choices = document.querySelectorAll(".choice")
const userScorePara = document.querySelector("#user_score")
const computerScorePara = document.querySelector("#computer_score")
const msg = document.querySelector("#msg")

let userScore = 0
let compScore = 0

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    msg.textContent = "It's Draw! Play Again."
    msg.style.backgroundColor = "#365486"
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.textContent = userScore
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        computerScorePara.textContent = compScore
        msg.textContent = `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice()
    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }
        showWin(userWin, userChoice, compChoice)
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

