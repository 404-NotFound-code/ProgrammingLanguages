// Quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hypertext Machine Language",
        "Hypertext Marking Language",
        "Hypertext Manual Language"
      ],
      answer: "Hypertext Markup Language"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Load question and options
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
  
    // Clear previous result
    resultElement.textContent = "";
  
    // Load question
    questionElement.textContent = quizData[currentQuestion].question;
  
    // Load options
    optionsElement.innerHTML = "";
    quizData[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = checkAnswer;
      optionsElement.appendChild(button);
    });
  }
  
  // Check if the selected answer is correct
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  
    // Move to the next question
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Show final result
  function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  // Start the quiz
  loadQuestion();