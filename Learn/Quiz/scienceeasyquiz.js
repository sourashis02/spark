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
        question: 'Legs have feet and arms have ___.',
        answers: [
            { text: 'Hands', correct: true },
            { text: 'Skull', correct: false },
            { text: 'Ankles', correct: false },
            { text: 'Pelvis', correct: false }
        ]
    },
    {
        question: 'All animals need food, air, and __ to survive.',
        answers: [
            { text: 'Fruits', correct: false },
            { text: 'Water', correct: true },
            { text: 'House', correct: false },
            { text: 'Chocolate', correct: false }
        ]
    },
    {
        question: 'What is Earth’s only natural satellite ?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Sun', correct: false },
            { text: 'Moon', correct: true },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'A male cow is called  ?',
        answers: [
            { text: 'Dog', correct: false },
            { text: 'Sheep', correct: false },
            { text: 'Ox', correct: true },
            { text: 'Monkey', correct: false }
        ]
    },
    {
        question: 'Which one is a far-bearing animal ?',
        answers: [
            { text: 'Hen', correct: false },
            { text: 'Tortoise', correct: false },
            { text: 'Cat', correct: true },
            { text: 'Crocodile', correct: false }
        ]
    },
    {
        question: 'Which animal lays egg ?',
        answers: [
            { text: 'Duck', correct: true },
            { text: 'Dog', correct: false },
            { text: 'Sheep', correct: false },
            { text: 'Cat', correct: false }
        ]
    },
    {
        question: 'What part of the body helps you move?',
        answers: [
            { text: 'Muscles', correct: true },
            { text: 'Eyes', correct: false },
            { text: 'Lungs', correct: false },
            { text: 'pancreas', correct: false }
        ]
    },
    {
        question: 'The tree has a branch filled with green _____. ',
        answers: [
            { text: 'Root', correct: false },
            { text: 'Trunk', correct: false },
            { text: 'Hair', correct: false },
            { text: 'Leaves', correct: true }
        ]
    },
    {
        question: 'The two holes of the nose are called  ? ',
        answers: [
            { text: 'Eyelids', correct: false },
            { text: 'Hair', correct: false },
            { text: 'Nails', correct: false },
            { text: 'Nostrils', correct: true }
        ]
    },
    {
        question: 'What star shines in the day and provides light ?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Sun', correct: true },
            { text: 'Moon', correct: false }
        ]
    }
]