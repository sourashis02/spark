const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var count = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    count = 0;
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        score = count - 10;
        if (score >= 8) {
            alert("--> Congratulations, You got " + (count - 10) + " correct. Great Progress.<--");
        } else if (score >= 5 && score < 8) {
            alert("--> You got " + (count - 10) + " correct. Good Going. <--");
        } else {
            alert("--> You got " + (count - 10) + " correct. Try Hard and Better Luck Next Time. <--");
        }
        count = 0;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        count++;
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'What is 333 - 129 ?',
        answers: [
            { text: '523', correct: false },
            { text: '204', correct: true },
            { text: '362', correct: false },
            { text: '131', correct: false }
        ]
    },
    {
        question: 'What is 25 X 33 ?',
        answers: [
            { text: '695', correct: false },
            { text: '825', correct: true },
            { text: '975', correct: false },
            { text: '1205', correct: false }
        ]
    },
    {
        question: 'What is 651 divided by 7 ?',
        answers: [
            { text: '93', correct: true },
            { text: '73', correct: false },
            { text: '51', correct: false },
            { text: '83', correct: false }
        ]
    },
    {
        question: 'What is 1535 - 1278 ?',
        answers: [
            { text: '213', correct: false },
            { text: '512', correct: false },
            { text: '527', correct: false },
            { text: '257', correct: true }
        ]
    },
    {
        question: 'Arrange in Ascending Order :- 37, 113, 221, 10, 2',
        answers: [
            { text: '113, 10, 221, 2, 37', correct: false },
            { text: '2, 10, 37, 221, 113', correct: false },
            { text: '2, 10, 37, 113, 221', correct: true },
            { text: '221, 113, 37, 10, 2', correct: false }
        ]
    },
    {
        question: 'Arrange in Descending Order :- 31, 99, 0, 213, 1',
        answers: [
            { text: '0, 1, 31, 99, 213', correct: false },
            { text: '213, 99, 0, 31, 1', correct: false },
            { text: '213, 99, 31, 1, 0', correct: true },
            { text: '99, 0, 1, 213, 31', correct: false }
        ]
    },
    {
        question: 'What is 21 + 52 - 32 + 3 ?',
        answers: [
            { text: '44', correct: true },
            { text: '54', correct: false },
            { text: '43', correct: false },
            { text: '29', correct: false }
        ]
    },
    {
        question: 'What is 37 - 23 + 51 - 7 ?',
        answers: [
            { text: '581', correct: false },
            { text: '85', correct: false },
            { text: '58', correct: true },
            { text: '29', correct: false }
        ]
    },
    {
        question: 'What is 42 + 18 X 2 ?',
        answers: [
            { text: '120', correct: true },
            { text: '78', correct: false },
            { text: '87', correct: false },
            { text: '102', correct: false }
        ]
    },
    {
        question: 'What is 225 / 5 - 23 ?',
        answers: [
            { text: '21', correct: false },
            { text: '25', correct: false },
            { text: '24', correct: false },
            { text: '22', correct: true }
        ]
    }
]