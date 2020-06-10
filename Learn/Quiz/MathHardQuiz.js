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
        question: '50 - [ 20 + { 30 - ( 20 - 5 ) } ]',
        answers: [
            { text: '15', correct: true },
            { text: '21', correct: false },
            { text: '19', correct: false },
            { text: '23', correct: false }
        ]
    },
    {
        question: '999 round off to nearest 99 is',
        answers: [
            { text: '9999', correct: false },
            { text: '997', correct: false },
            { text: '998', correct: false },
            { text: '990', correct: true }
        ]
    },
    {
        question: '1800 / 10 x { ( 12 - 6 ) + (24 - 12 ) } = ?',
        answers: [
            { text: '5213', correct: false },
            { text: '1092', correct: false },
            { text: '3240', correct: true },
            { text: '4230', correct: false }
        ]
    },
    {
        question: 'If 2 + 3 = 35, 3 + 4 = 47, 4 + 1 = 15, 2 + 5 = 57, then 6 + 3 = ?',
        answers: [
            { text: '37', correct: false },
            { text: '23', correct: false },
            { text: '53', correct: false },
            { text: '39', correct: true }
        ]
    },
    {
        question: '64 round off nearest to 10 is',
        answers: [
            { text: '60', correct: true },
            { text: '62', correct: false },
            { text: '70', correct: false },
            { text: '64', correct: false }
        ]
    },
    {
        question: '4 x 4 + 4 x 4 + 4 - 4 x 4 = ?',
        answers: [
            { text: '111', correct: false },
            { text: '22', correct: false },
            { text: '20', correct: true },
            { text: '44', correct: false }
        ]
    },
    {
        question: '30 / ( - 5) + 4 x ( -2 ) + 14 = ?',
        answers: [
            { text: '0', correct: true },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '1', correct: false }
        ]
    },
    {
        question: 'If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 , then 5 = ?',
        answers: [
            { text: '41525', correct: false },
            { text: '54123', correct: false },
            { text: '54325', correct: true },
            { text: '12345', correct: false }
        ]
    },
    {
        question: 'If A + C = 4, D + E = 9, B + F = 8, Z + C = 29, then G + A = ?',
        answers: [
            { text: '2', correct: false },
            { text: '9', correct: false },
            { text: '11', correct: false },
            { text: '8', correct: true }
        ]
    },
    {
        question: 'A number is greater than 3 but less than 8. Also the number is greater than 6 but less than 10. What is the number?',
        answers: [
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '5', correct: false }
        ]
    }
]