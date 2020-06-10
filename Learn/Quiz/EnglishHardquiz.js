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
        question: 'Whose bag is this ? It\'s _______ .  ',
        answers: [
            { text: 'of me', correct: false },
            { text: 'mine', correct: true },
            { text: 'me', correct: false },
            { text: 'my', correct: false }
        ]
    },
    {
        question: '______ it stopped raining we started our journey ',
        answers: [
            { text: 'As soon as', correct: true },
            { text: 'No sooner had', correct: false },
            { text: 'Never the less', correct: false },
            { text: 'Hardly had', correct: false }
        ]
    },
    {
        question: 'Run fast ______ get your ticket. ',
        answers: [
            { text: 'and', correct: true },
            { text: 'as', correct: false },
            { text: 'but', correct: false },
            { text: 'were', correct: false }
        ]
    },
    {
        question: 'She did not sing so ______ as her friend. ',
        answers: [
            { text: 'worst', correct: false },
            { text: 'better', correct: false },
            { text: 'best', correct: false },
            { text: 'well', correct: true }
        ]
    },
    {
        question: 'There is _____ one-eyed deer.',
        answers: [
            { text: 'two', correct: false },
            { text: 'an', correct: false },
            { text: 'a', correct: true },
            { text: 'the', correct: false }
        ]
    },
    {
        question: 'My father is a farmer but yours ____ an advocate. ',
        answers: [
            { text: 'the', correct: false },
            { text: ' does', correct: false },
            { text: 'is', correct: true },
            { text: 'are', correct: false }
        ]
    },
    {
        question: 'They are very clever but _______ class teacher isn\'t. ',
        answers: [
            { text: 'their ', correct: true },
            { text: 'them', correct: false },
            { text: 'there', correct: false },
            { text: 'his', correct: false }
        ]
    },
    {
        question: 'This is my mobile, where is _______ ? ',
        answers: [
            { text: 'you', correct: false },
            { text: 'your', correct: false },
            { text: 'yours', correct: true },
            { text: 'you\'re', correct: false }
        ]
    },
    {
        question: 'We _____ very regular classes. ',
        answers: [
            { text: 'have', correct: true },
            { text: 'is', correct: false },
            { text: 'doesn\'t', correct: false },
            { text: 'are', correct: false }
        ]
    },
    {
        question: 'Cricket is the _______ game in our country.',
        answers: [
            { text: 'more popular', correct: false },
            { text: 'must popular', correct: false },
            { text: 'might popular', correct: false },
            { text: 'most popular', correct: true }
        ]
    }
]