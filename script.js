// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// GAME FUNCTIONS SLAYYYY

// DEFINING VARIABLES

let question = document.getElementById("level")
let score = document.getElementById("score")
let leftImg = document.getElementById("left-answer-img")
let rightImg = document.getElementById("right-answer-img")

let leftBtn = document.getElementById("left-game-btn")
let rightBtn = document.getElementById("right-game-btn")

let submitBtn = document.getElementById("submit-btn")

var roundIndex = 0
var scoreCounter = 0
var userAnswer = 0

// QUESTION BANK

questionBank = [
    [["1-left", false],["1-right", true], "School of Hotel, Restaurant and Institution Management"],
    [["2-left", false],["2-right", true], "General Dress Code"],
    [["3-left", true],["3-right", false], "Extraordinary Mondays"],
    [["4-left", true],["4-right", false], "General Dress Code"],
    [["5-left", false],["5-right", true], "School of Hotel, Restaurant and Institution Management"],
    [["6-left", false],["6-right", true], "Extraordinary Mondays"],
    [["7-left", true],["7-right", false], "General Dress Code"],
    [["8-left", true],["8-right", false], "General Dress Code"],
    [["9-left", true],["9-right", false], "General Dress Code"],
    [["10-left", true],["10-right", false], "General Dress Code"],
    [["10-left", true],["10-right", false], "General Dress Code"],
]

// EVENT LISTENERS

leftBtn.addEventListener("click", selectChoiceA)
rightBtn.addEventListener("click", selectChoiceB)

// CHECK ANSWER

function changeDisplay(){
    leftNewImg = "ITEMS/" + questionBank[roundIndex][0][0] + ".png"
    document.getElementById("left-answer-img").setAttribute("src", leftNewImg)
    rightNewImg = "ITEMS/" + questionBank[roundIndex][1][0] + ".png"
    document.getElementById("right-answer-img").setAttribute("src", rightNewImg)

    question.innerHTML = questionBank[roundIndex][2]
}

function selectChoiceA(){
    if(questionBank[roundIndex][0][1] == true){ 
        scoreCounter++
        score.innerHTML = "SCORE: " + scoreCounter
        roundIndex++

        changeDisplay()
        if(roundIndex == 10){
            endGame()
        }
    }else{
        roundIndex++
        changeDisplay()
        if(roundIndex == 10){
            endGame()
        }
    }
}

function selectChoiceB(){
    if(questionBank[roundIndex][1][1] == true){
        scoreCounter++
        score.innerHTML = "SCORE: " + scoreCounter
        roundIndex++

        changeDisplay()
        
        if(roundIndex == 10){
            endGame()
        }
    }else{
        roundIndex++
        changeDisplay()
        if(roundIndex == 10){
            endGame()
        }
    }

}
// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    scoreCounter
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 7){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

function startGame(){
    hideStartScreen()
}

