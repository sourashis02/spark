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
        question: 'Which group of animals have scales?',
        answers: [
            { text: 'Reptiles', correct: true },
            { text: 'Mammals', correct: false },
            { text: 'Amphibians', correct: false }
        ]
    },
    {
        question: 'Animals that suckle their young one are called ____. ',
        answers: [
            { text: 'Birds', correct: false },
            { text: 'Mammals', correct: true },
            { text: 'Reptiles', correct: false },
            { text: 'Amphibians', correct: false }
        ]
    },
    {
        question: ' __ helps pump blood through the entire body. ',
        answers: [
            { text: 'Kidneys', correct: false },
            { text: 'Lungs', correct: false },
            { text: 'Heart', correct: true },
            { text: 'Brain', correct: false }
        ]
    },
    {
        question: 'How does a dog express happiness?',
        answers: [
            { text: 'Wagging tail', correct: true },
            { text: 'Twitching ears', correct: false },
            { text: 'Closing Eyes', correct: false },
            { text: 'Moving Head', correct: false }
        ]
    },
    {
        question: 'If one boils water it will convert into __',
        answers: [
            { text: 'Snow', correct: false },
            { text: 'Clouds', correct: false },
            { text: 'Steam', correct: true },
            { text: 'Mist', correct: false }
        ]
    },
    {
        question: ' Where does our food collect after we crew and swallow it ?',
        answers: [
            { text: 'Smell Intestine', correct: false },
            { text: 'Liver', correct: false },
            { text: 'Stomach', correct: true }
        ]
    },
    {
        question: 'What is the boiling point of water? ',
        answers: [
            { text: '25 Degree C', correct: false },
            { text: '50 Degree C', correct: false },
            { text: '100 Degree C', correct: true },
            { text: '75 Degree C', correct: false }
        ]
    },
    {
        question: 'When you push something, you apply__',
        answers: [
            { text: 'Compression', correct: false },
            { text: 'Mass', correct: false },
            { text: 'Accleration', correct: false },
            { text: 'Force', correct: true }
        ]
    },
    {
        question: 'Which is the largest land animal ? ',
        answers: [
            { text: 'Tiger', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Rhinoceros', correct: false },
            { text: 'ELephant', correct: true }
        ]
    },
    {
        question: 'What part of the plant conducts photosynthesis ?',
        answers: [
            { text: 'Branch', correct: false },
            { text: 'Root', correct: false },
            { text: 'Trunk', correct: false },
            { text: 'Leaf', correct: true }
        ]
    }
]