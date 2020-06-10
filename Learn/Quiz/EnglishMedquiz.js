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
        question: ' I would not say that to him if I ____ you. ',
        answers: [
            { text: 'be', correct: false },
            { text: 'was', correct: true },
            { text: 'has', correct: false },
            { text: 'have', correct: false }
        ]
    },
    {
        question: 'Could you tell me _______ ?  ',
        answers: [
            { text: 'where the bus stop is', correct: true },
            { text: 'where is the bus stop ', correct: false },
            { text: 'is where the busstop', correct: false },
            { text: ' the busstop is where', correct: false }
        ]
    },
    {
        question: 'I ___ to Germany last year.',
        answers: [
            { text: 'went', correct: true },
            { text: 'goes', correct: false },
            { text: 'go', correct: false },
            { text: 'were', correct: false }
        ]
    },
    {
        question: 'Do you think it\'s _____ rain tomorrow ?',
        answers: [
            { text: 'was', correct: false },
            { text: 'were', correct: false },
            { text: 'be', correct: false },
            { text: 'going to', correct: true }
        ]
    },
    {
        question: 'I\'ve already called her four times ______ .',
        answers: [
            { text: 'again', correct: false },
            { text: 'tomorrow', correct: false },
            { text: 'yesterday', correct: false },
            { text: 'before', correct: true }
        ]
    },
    {
        question: 'That smells good ! What _______ ? ',
        answers: [
            { text: 'do you cook', correct: false },
            { text: 'do you cooking', correct: false },
            { text: 'are you cooking', correct: true },
            { text: 'are you cook', correct: false }
        ]
    },
    {
        question: 'I was ____ exhausted by the end of the day .',
        answers: [
            { text: 'completely ', correct: true },
            { text: 'very', correct: false },
            { text: 'extremely', correct: false },
            { text: 'incredebly', correct: false }
        ]
    },
    {
        question: 'I ____ getting up early. ',
        answers: [
            { text: 'do', correct: false },
            { text: 'has', correct: false },
            { text: 'am not', correct: true },
            { text: 'is', correct: false }
        ]
    },
    {
        question: 'What film ____ we watch ?',
        answers: [
            { text: 'are we going', correct: true },
            { text: 'will', correct: false },
            { text: 'do', correct: false },
            { text: 'shall', correct: false }
        ]
    },
    {
        question: 'He ____ ever works as ____ he should. ',
        answers: [
            { text: 'hard,hardly', correct: false },
            { text: 'has,hardly', correct: false },
            { text: 'had,hardly', correct: false },
            { text: 'hardly,hard', correct: true }
        ]
    }
]