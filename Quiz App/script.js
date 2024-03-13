const questions = [
    {
        question: "What does JavaScript primarily add to a web page?",
        options : [
            { text: "Style", correct: false },
            { text: "Interactivity", correct: true },
            { text: "Structure", correct: false },
            { text: "Images", correct: false }
        ]
    },

    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options : [
            { text: "let myVar = 10", correct: false },
            { text: "var myVar = 10", correct: false },
            { text: "const myVar = 10", correct: false },
            { text: "all of the above", correct: true }
        ]
    },

    {
        question: "Which of the following is a falsy value in JavaScript?",
        options : [
            { text: "0", correct: false },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "all of the above", correct: true }
        ]
    },

    {
        question: "What is the purpose of the document.getElementById() method in JavaScript?",
        options : [
            { text: "To get the value of an input element", correct: false },
            { text: "To change the page's title", correct: false },
            { text: "To get an element by its ID", correct: true },
            { text: "To add a new HTML element", correct: false }
        ]
    },

    {
        question: "Which operator is used for equality without type coercion in JavaScript?",
        options : [
            { text: "===", correct: true },
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "!==", correct: false }
        ]
    },

    {
        question: "Which function is used to add a new element at the end of an array in JavaScript?",
        options : [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },

    {
        question: "What is the purpose of the setTimeout() function in JavaScript?",
        options : [
            { text: "To set the text of an element", correct: false },
            { text: "To execute a function after a specified delay", correct: true },
            { text: "To change the color of an element", correct: false },
            { text: "To create a new object", correct: false }
        ]
    },

    {
        question: "Which of the following is not a valid JavaScript data type?",
        options : [
            { text: "String", correct: false },
            { text: "Object", correct: false },
            { text: "Function", correct: false },
            { text: "Character", correct: true }
        ]
    },

    {
        question: "What does the addEventListener() method do in JavaScript?",
        options : [
            { text: "Adds a new element to the page", correct: false },
            { text: "Adds a click event to an element", correct: true },
            { text: "Changes the page's background color", correct: false },
            { text: "Removes an element from the page", correct: false }
        ]
    },

    {
        question: "What is the purpose of the return statement in a JavaScript function?",
        options : [
            { text: "To stop the function's execution", correct: false },
            { text: "To return a value from the function", correct: true },
            { text: "To print a message to the console", correct: false },
            { text: "To declare a new variable", correct: false }
        ]
    }

]

let questionElement = document.querySelector(".question");
let optionsWrapper = document.querySelector(".options-wrapper")
let nextBtn = document.querySelector(".nextBtn");

let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    displayQustions();
}

function displayQustions() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(options => {
        const button = document.createElement("button");
        button.innerHTML = options.text;
        button.classList.add("options");
        optionsWrapper.appendChild(button);
        if (options.correct ) {
            button.dataset.correct = options.correct;
        }
         button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(optionsWrapper.firstChild) {
        optionsWrapper.removeChild(optionsWrapper.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else { selectedBtn.classList.add("inCorrect") };

    Array.from(optionsWrapper.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQustions()
    } else {
        showScore()
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextBtn()
    } else {
        startQuiz()
    }
})

startQuiz()