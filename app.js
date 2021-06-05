let randomNumber = Math.trunc(Math.random() * 20) + 1;


let score = 10;
let highScore = 0;


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    //When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Guess";
        //When player wins
    } else if (guess === randomNumber) {
        document.querySelector(".message").textContent = "Correct Guess";
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "#BBBE25";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        };


        //When guess is too high
    } else if (guess > randomNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "Guess is too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Game Over, You lose";
            document.querySelector(".score").textContent = 0;
        }
        //When guess is too low
    } else if (guess < randomNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Guess is too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Game Over, You lose";
            document.querySelector(".score").textContent = 0;
        };
    };

});

document.querySelector(".again").addEventListener("click", function() {
    score = 10;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start Guessing";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#1c4479";
    document.querySelector(".number").style.width = "15rem";

});
