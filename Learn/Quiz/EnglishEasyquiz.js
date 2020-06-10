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
        question: 'Jenny ____ tired. ',
        answers: [
            { text: 'be', correct: false },
            { text: 'is', correct: true },
            { text: 'has', correct: false },
            { text: 'have', correct: false }
        ]
    },
    {
        question: '____ is she ? ',
        answers: [
            { text: 'who', correct: true },
            { text: 'why', correct: false },
            { text: 'which', correct: false },
            { text: 'what', correct: false }
        ]
    },
    {
        question: 'Yesterday it ____ Tuesday.',
        answers: [
            { text: 'was', correct: true },
            { text: 'is', correct: false },
            { text: 'be', correct: false },
            { text: 'were', correct: false }
        ]
    },
    {
        question: 'Tomorrow it _____ Friday.',
        answers: [
            { text: 'was', correct: false },
            { text: 'were', correct: false },
            { text: 'be', correct: false },
            { text: 'will be', correct: true }
        ]
    },
    {
        question: '____ lots of animals is the zoo',
        answers: [
            { text: 'There', correct: false },
            { text: 'There is', correct: false },
            { text: 'There are', correct: true },
            { text: 'There aren\'t', correct: false }
        ]
    },
    {
        question: 'How many people ____ in your family ?',
        answers: [
            { text: 'there are', correct: false },
            { text: 'is there', correct: false },
            { text: 'are there', correct: true },
            { text: 'are', correct: false }
        ]
    },
    {
        question: 'Has Steve got a sister ?" No he ___.',
        answers: [
            { text: 'has not ', correct: true },
            { text: 'not', correct: false },
            { text: 'have not', correct: false },
            { text: 'has', correct: false }
        ]
    },
    {
        question: 'Where ___ Sara lives ? ',
        answers: [
            { text: 'do', correct: false },
            { text: 'has', correct: false },
            { text: 'does', correct: true },
            { text: 'is', correct: false }
        ]
    },
    {
        question: '_____ to London on the train yesterday ?',
        answers: [
            { text: 'Did Jenny go', correct: true },
            { text: 'Jenny went', correct: false },
            { text: 'Jenny go', correct: false },
            { text: 'Jenny will go', correct: false }
        ]
    },
    {
        question: 'Jack ____ English , Spanish and bit of French.',
        answers: [
            { text: 'speak', correct: false },
            { text: 'speaking', correct: false },
            { text: 'is speaking', correct: false },
            { text: 'speaks', correct: true }
        ]
    }
]