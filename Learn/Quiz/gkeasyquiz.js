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
        question: 'How many months do we have in a year ? ',
        answers: [
            { text: '21 Months', correct: false },
            { text: '6 Months', correct: false },
            { text: '9 Months', correct: false },
            { text: '12 Months', correct: true }
        ]
    },
    {
        question: 'How many days we have in a week ? ',
        answers: [
            { text: '7 Days', correct: true },
            { text: '8 Days', correct: false },
            { text: '6 Days', correct: false },
            { text: '9 Days', correct: false }
        ]
    },
    {
        question: 'What is 2+2=_? ',
        answers: [
            { text: '5', correct: false },
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'Which number comes after 6 ?',
        answers: [
            { text: '1', correct: false },
            { text: '5', correct: false },
            { text: '7', correct: true },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'How many colours are there in a rainbow ?',
        answers: [
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'Which day comes after "Friday" ?',
        answers: [
            { text: 'Saturday', correct: true },
            { text: 'Monday', correct: false },
            { text: 'Tuesday', correct: false },
            { text: 'Wednesday', correct: false }
        ]
    },
    {
        question: 'How many days are there in a year ? ',
        answers: [
            { text: '265', correct: false },
            { text: '363', correct: false },
            { text: '365', correct: true },
            { text: '364', correct: false }
        ]
    },
    {
        question: 'We use our eyes to ____?',
        answers: [
            { text: 'See', correct: true },
            { text: 'Feel', correct: false },
            { text: 'Eat', correct: false },
            { text: 'Hear', correct: false }
        ]
    },
    {
        question: 'Which animal is known as "Ship of Desert" ?',
        answers: [
            { text: 'Dog', correct: false },
            { text: 'Snake', correct: false },
            { text: 'Camel', correct: true },
            { text: 'Lion', correct: false }
        ]
    },
    {
        question: 'How many letters are there in the english alphabet ?',
        answers: [
            { text: '26', correct: true },
            { text: '25', correct: false },
            { text: '23', correct: false },
            { text: '27', correct: false }
        ]
    }
]