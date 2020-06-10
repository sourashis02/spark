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
        question: 'Earth is sorrounded by layers of gases collectively called the __.',
        answers: [
            { text: 'Atmosphere', correct: true },
            { text: 'Ozone Layer', correct: false },
            { text: 'Stratosphere', correct: false },
            { text: 'Hydrophere', correct: false }
        ]
    },
    {
        question: 'Which is the strongest sense of a dog ? ',
        answers: [
            { text: 'Taste', correct: false },
            { text: 'Hearing', correct: false },
            { text: 'Touch', correct: false },
            { text: 'Smell', correct: true }
        ]
    },
    {
        question: 'Similar body cells group together to form a __. ',
        answers: [
            { text: 'Joints', correct: false },
            { text: 'Organ', correct: false },
            { text: 'Blood Vessels', correct: false },
            { text: 'Tissue', correct: true }
        ]
    },
    {
        question: 'What tissue connects muscles to bones?',
        answers: [
            { text: 'Tendon', correct: false },
            { text: 'Fat', correct: false },
            { text: 'Skin', correct: true },
            { text: 'Blood Vessels', correct: false }
        ]
    },
    {
        question: 'Which nutrient plays an essential role in muscle building?',
        answers: [
            { text: 'Iron', correct: false },
            { text: 'Carbohydrate', correct: false },
            { text: 'Fat', correct: false },
            { text: 'Protein', correct: true }
        ]
    },
    {
        question: 'Which scientist proposed the three laws of motion?',
        answers: [
            { text: 'Thomas Alva Edison', correct: false },
            { text: 'Issac Nweton', correct: true },
            { text: 'Albert Einstein', correct: false },
            { text: 'Stephen Hawking', correct: false }
        ]
    },
    {
        question: 'What energy emerges from motion ?',
        answers: [
            { text: 'Kinetic Energy', correct: true },
            { text: 'Electrical Energy', correct: false },
            { text: 'Potential Energy', correct: false },
            { text: 'Gravitational Energy', correct: false }
        ]
    },
    {
        question: 'Plants need which gas to perform photosynthesis ?',
        answers: [
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Carbon mono Oxide', correct: false },
            { text: 'Hydrogen', correct: false },
            { text: 'Oxygen', correct: false }
        ]
    },
    {
        question: 'Which system of the body control the sense?  ',
        answers: [
            { text: 'Skeleton System', correct: false },
            { text: 'Nervous System', correct: true }
        ]
    },
    {
        question: 'Which is the largest animal on Earth?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Shark', correct: false }
        ]
    }
]