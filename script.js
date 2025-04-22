let questions = [
  { clue: "Ito ang sistematikong proseso ng pagkuha ng datos upang makahanap ng sagot sa isang tanong.", answer: "pananaliksik" },
  { clue: "Mga taong pinili bilang kalahok sa isang pag-aaral.", answer: "respondente" },
  { clue: "Ito ang ideya o salitang pinag-uusapan sa pananaliksik.", answer: "paksa" },
  { clue: "Tawag sa pahayag na sinusuri upang mapatunayan sa pananaliksik.", answer: "haypotesis" },
  { clue: "Isang pag-aaral batay sa numerikal na datos at estadistika.", answer: "kwantitatibo" },
  { clue: "Pag-aaral na tumatalakay sa kahulugan, karanasan, at konteksto.", answer: "kwalitatibo" },
  { clue: "Ito ay ang kabuuan ng mga ideya at paniniwala na gabay sa pananaliksik.", answer: "teorya" },
  { clue: "Isang paraan ng pangangalap ng datos gamit ang harapang pag-uusap.", answer: "interbyu" },
  { clue: "Ito ang estratehiya sa pagbuo ng disenyo ng pananaliksik na nakatuon sa pagkolekta ng impormasyon mula sa dokumento.", answer: "analisis ng nilalaman" },
  { clue: "Tawag sa talaan ng mga aklat, artikulo, at iba pang sanggunian na ginamit sa pananaliksik.", answer: "bibliograpiya" }
];

let currentIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;

function startGame() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  score = 0;
  currentIndex = 0;
  timeLeft = 15;
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  document.getElementById("clue").innerText = "Clue: " + questions[currentIndex].clue;
  document.getElementById("guess").value = "";
  document.getElementById("feedback").innerText = "";
  timeLeft = 15;
  document.getElementById("timer").innerText = timeLeft;
}

function checkAnswer() {
  const userGuess = document.getElementById("guess").value.trim().toLowerCase();
  const correctAnswer = questions[currentIndex].answer;

  if (userGuess === correctAnswer) {
    document.getElementById("feedback").innerText = "✅ Tama!";
    score++;
  } else {
    document.getElementById("feedback").innerText = "❌ Mali. Ang tamang sagot ay: " + correctAnswer;
  }
  document.getElementById("score").innerText = score;
  clearInterval(timerInterval);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestion();
    startTimer();
  } else {
    endGame();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("feedback").innerText = "⏰ Oras na! Ang tamang sagot ay: " + questions[currentIndex].answer;
    }
  }, 1000);
}

function endGame() {
  document.getElementById("clue").innerText = "🎉 Tapos na ang laro!";
  document.getElementById("guess").style.display = "none";
  document.querySelector("button[onclick='checkAnswer()']").style.display = "none";
  document.querySelector("button[onclick='nextQuestion()']").style.display = "none";
  document.getElementById("feedback").innerText = "Kabuuang Puntos: " + score;
  clearInterval(timerInterval);
}
