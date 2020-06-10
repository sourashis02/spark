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
        question: 'What makes up (approx) 80% volumn ?',
        answers: [
            { text: 'Blood', correct: false },
            { text: 'Food', correct: false },
            { text: 'Water', correct: true }
        ]
    },
    {
        question: 'What is the next number in the sequence 7,14,21,28,__? ',
        answers: [
            { text: '34', correct: false },
            { text: '42', correct: true },
            { text: '35', correct: false },
            { text: '70', correct: false }
        ]
    },
    {
        question: 'In Which ocean did the famous Titanic sink in 1912____? ',
        answers: [
            { text: 'North Atlantic', correct: true },
            { text: 'Pacefic', correct: false },
            { text: 'Indian', correct: false }
        ]
    },
    {
        question: 'Which two parts of the body continue to grow for your entire life ? ',
        answers: [
            { text: 'Nose & ears', correct: true },
            { text: 'Nose & eye', correct: false },
            { text: 'Hands & Legs', correct: false}

        ]
    },
    {
        question: 'During which year did world war 1 begin ?',
        answers: [
            { text: '1941', correct: false },
            { text: '1917', correct: false },
            { text: '1914', correct: true },
            { text: '1945', correct: false }
        ]
    },
    {
        question: 'What is three-fifth of 50 ?',
        answers: [
            { text: '30', correct: true },
            { text: '25', correct: false },
            { text: '10', correct: false },
            { text: '100', correct: false }
        ]
    },
    {
        question: 'Which planet is smallest ? ',
        answers: [
            { text: 'Neptune', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'Your blood type is determined by the genes you inherit from of parents. ',
        answers: [
            { text: 'False', correct: false },
            { text: 'True', correct: true }
        ]
    },
    {
        question: 'What is the square root of 144 ? ',
        answers: [
            { text: '11', correct: false },
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '19', correct: false }
        ]
    },
    {
        question: 'Zelandia is apart of ',
        answers: [
            { text: 'India', correct: false },
            { text: 'USA', correct: false },
            { text: 'New Zealand', correct: true },
            { text: 'UAE', correct: false }
        ]
    }
]