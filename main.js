console.log("hola")

var p1Btn = document.querySelector("#p1")
var p2Btn = document.querySelector("#p2")
var resetBtn = document.querySelector("#reset")
var p1Score = 0;
var p2Score = 0;
var numInput = document.querySelector("input")
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span")

p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner")
            gameOver = true;
        }
        p1Display.textContent = p1Score
    }
    
})

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner")
            gameOver = true;
        }
        p2Display.textContent = p2Score
    }
})

resetBtn.addEventListener("click", function(){
    reset()
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value
    winningScore = Number(numInput.value)
    reset()
})


function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;   
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameOver = false;
}