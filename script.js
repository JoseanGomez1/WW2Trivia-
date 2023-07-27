//* this is where i Begun and started to make my questions and descriping all the
const questions = [
    {
        question: "Hitler ruled italy.",
        answer: false
    },
    {
        question: "Peal harbor was during WW2.",
        answer: true
    },
    {
        question: "www.",
        answer: true
    },
    {
        question: "Adolf Hitler was the leader of the Soviet Union during World War II.",
        answer: false
    },
    {
        question: "USA Joined the war after England.",
        answer: true
    },
    {
        question: "The Normady Battle was also Know As D-Day.",
        answer: true
    },
    {
        question: "The atomic bombs were reason japan lost the War.",
        answer: true
    },
    {
        question: "Germany surrendered in 1945.",
        answer: true
    }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById("question");
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
    displayScore();
}

function displayScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + score;
}

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    displayScore();
    displayQuestion();
    const startButton = document.getElementById("startButton");
    startButton.style.display = "none";
}

function endGame() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = "Game Over Solider! Your final score is: " + score;
    const optionsElement = document.getElementById("options");
    optionsElement.style.display = "none";
    const startButton = document.getElementById("startButton");
    startButton.style.display = "block";
}
// note from josh to get game to restart "Reintroduce displaay block"
// This was added because intially after the game was completed and i would try to restart the game and replay it the true or false would disappear

function startGame() {
    score = 0;
    currentQuestionIndex = 0;

    // This part here will re introuduce the oprions
    const optionsElement = document.getElementById("options");
    optionsElement.style.display = "block";

    displayScore();
    displayQuestion();
}