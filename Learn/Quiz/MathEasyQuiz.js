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
        question: 'What is 20 + 14 = ?',
        answers: [
            { text: '44', correct: false },
            { text: '34', correct: true },
            { text: '38', correct: false },
            { text: '24', correct: false }
        ]
    },
    {
        question: 'What is 57 - 23 = ?',
        answers: [
            { text: '34', correct: true },
            { text: '30', correct: false },
            { text: '24', correct: false },
            { text: '31', correct: false }
        ]
    },
    {
        question: 'What is 19 x 15 = ?',
        answers: [
            { text: '270', correct: false },
            { text: '285', correct: true },
            { text: '315', correct: false },
            { text: '280', correct: false }
        ]
    },
    {
        question: 'What 51 divided by 3 is ?',
        answers: [
            { text: '13', correct: false },
            { text: '19', correct: false },
            { text: '14', correct: false },
            { text: '17', correct: true }
        ]
    },
    {
        question: 'What is 18 x 2 = ?',
        answers: [
            { text: '38', correct: false },
            { text: '34', correct: false },
            { text: '36', correct: true },
            { text: '42', correct: false }
        ]
    },
    {
        question: 'What is 11 + 19 = ?',
        answers: [
            { text: '30', correct: true },
            { text: '20', correct: false },
            { text: '21', correct: false },
            { text: '29', correct: false }
        ]
    },
    {
        question: 'What is 90 - 58 = ?',
        answers: [
            { text: '48', correct: false },
            { text: '32', correct: true },
            { text: '42', correct: false },
            { text: '38', correct: false }
        ]
    },
    {
        question: 'What is 21 divided by 7 ?',
        answers: [
            { text: '4', correct: false },
            { text: '7', correct: false },
            { text: '3', correct: true },
            { text: '11', correct: false }
        ]
    },
    {
        question: 'There are 37 birds on a tree. Suddenly 15 birds fly away. So, how many birds remains on the tree?',
        answers: [
            { text: '23', correct: false },
            { text: '27', correct: false },
            { text: '33', correct: false },
            { text: '22', correct: true }
        ]
    },
    {
        question: 'Ram has 15 marbles and Shyam has 23 marbles. How many marbles they both have?',
        answers: [
            { text: '7', correct: false },
            { text: '34', correct: false },
            { text: '47', correct: false },
            { text: '38', correct: true }
        ]
    }
]