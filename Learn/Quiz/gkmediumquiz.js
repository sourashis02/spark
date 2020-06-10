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
        question: 'What do you call the person who brings a letter to your home from post office ? ',
        answers: [
            { text: 'Fisher', correct: false },
            { text: 'Pilot', correct: false },
            { text: 'Postman', correct: true },
            { text: 'Driver', correct: false }
        ]
    },
    {
        question: 'We smell with our ____?  ',
        answers: [
            { text: 'Eye', correct: false },
            { text: 'Nose', correct: true },
            { text: 'Ear', correct: false },
            { text: 'Tooth', correct: false }
        ]
    },
    {
        question: 'Baby of a Dog is Called __?',
        answers: [
            { text: 'Puppy', correct: true },
            { text: 'Cow', correct: false },
            { text: 'Bird', correct: false },
            { text: 'Goat', correct: false }
        ]
    },
    {
        question: 'How do you maternal grand father ?',
        answers: [
            { text: 'Mothers Father', correct: true },
            { text: 'Fathers Father', correct: false }

        ]
    },
    {
        question: 'How many constant are there in english alphabet ? ',
        answers: [
            { text: '22', correct: false },
            { text: '20', correct: false },
            { text: '21', correct: true },
            { text: '26', correct: false }
        ]
    },
    {
        question: 'What grows quicker hair or toe nails ?',
        answers: [
            { text: 'Hair', correct: true },
            { text: 'Toe Nail', correct: false }
        ]
    },
    {
        question: 'Which is the tallest mountain in the world ?',
        answers: [
            { text: 'Mount Kilimanjaro', correct: false },
            { text: 'Auddha', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Kanchanjungha', correct: false }
        ]
    },
    {
        question: 'How many days in the month february, 2020 ?',
        answers: [
            { text: '28', correct: false },
            { text: '29', correct: true },
            { text: '30', correct: false },
            { text: '31', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the red planet ? ',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Earth', correct: false },
            { text: 'Neptune', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Biggest planet is ___?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false }
        ]
    }
]