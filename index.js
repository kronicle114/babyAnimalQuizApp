'use strict'

let currentNumber = 0;
let score = 0;

// When startButton is clicked hide startQuiz div & unhide quizForm div
function startQuiz() {
    $(".startButton").click(function(){
        $('.startQuiz').hide();
        $(".quizForm").show();
        $('.currentNumber').text(1);
        });
}

//The function below defines the html of the quizForm
function buildQuizForm () {
    if (currentNumber < STORE.length) {
        return `<div class="question-${currentNumber}">
        <h2>${STORE[currentNumber].title}</h2>
        <div class="crop">
        <img src="${STORE[currentNumber].img}" alt"${STORE[currentNumber].alt}">
        </div>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${STORE[currentNumber].answers[0]}" name="answer" required>
        <span>${STORE[currentNumber].answers[0]}</span>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[currentNumber].answers[1]}" name="answer" required>
        <span>${STORE[currentNumber].answers[1]}</span>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[currentNumber].answers[2]}" name="answer" required>
        <span>${STORE[currentNumber].answers[2]}</span>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[currentNumber].answers[3]}" name="answer" required>
        <span>${STORE[currentNumber].answers[3]}</span>
        </label>

        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        restartQuiz();
        $('.currentNumber').text(10)
    }
}

// invoke the buildQuizForm function and render the html in the DOM
function renderCurrentQuestion() {
    $('.quizForm').html(buildQuizForm());
}

//When the user selects an answer, on click of the submit button run the user feedback
function selectAnswer() {
    $('form').on('submit', function(event) {
         event.preventDefault();
         let selected = $('input:checked');
         let answer = selected.val(); //answer = the text value of the user's selected input
         let correctAnswer = `${STORE[currentNumber].correctAnswer}`;
         if (answer === correctAnswer) { //if the user's answer matches the correctAnswer invoke the functions below
         ifAnswerIsCorrect();
         } else {
         ifAnswerIsWrong();
         }
         });
}

//invoke the correct answer feedback
function ifAnswerIsCorrect() {
    correctAnswerFeedback();
    updateScore();
}

//invoke the wrong answer feedback
function ifAnswerIsWrong () {
    wrongAnswerFeedback();
}

//define the html of the correct answer feedback
function correctAnswerFeedback() {
    let correctAnswer = `${STORE[currentNumber].correctAnswer}`;
    $('.quizForm').html(`
        <div class="correctAnswerFeedback">
        <img class="correctIcon" src="correctIcon.svg" alt="Correct Icon"/>
        </div>
        <p><b>You got it right!</b></p>
        <button type="button" class="nextButton">Next</button>
        </div>`
        );
}

//define the html of the wrong answer feedback
function wrongAnswerFeedback() {
    let correctAnswer = `${STORE[currentNumber].correctAnswer}`;
    $('.quizForm').html(`
        <div class="wrongAnswerFeedback">
        <img class="wrongIcon" src="wrongIcon.svg" alt="Wrong Icon"/>
        <p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p>
        <button type="button" class="nextButton">Next</button>
        </div>`
        );
}

//On the feedback page, when the nextButton is clicked render the next question (quizForm)
function renderNextQuestion () {
    $('main').on('click', '.nextButton', function (event) {
         changeCurrentNumber();
         renderCurrentQuestion();
         selectAnswer();
         });
}

//For loop to increment the current number
function changeCurrentNumber () {
    if (currentNumber < STORE.length) {
        currentNumber ++;
    }
    $('.currentNumber').text(currentNumber + 1);
}

//increment score
function changeScore() {
    score ++;
}

//update score text in the DOM
function updateScore () {
    changeScore();
    $('.score').text(score);
}

//When the quiz is over, define the html of the results page
function renderResults () {
    if (score >= 8) {
        $('.quizForm').html(`
            <div class="summary">
            <h3>Baby animal expert alert!</h3>
            <img src="LeoCheers.gif" alt="Leonardo DiCaprio toasting animation gif"/>
            <p>You got ${score} / 10</p>
            <p>You must be a pro. Cheers!</p>
            <button class="restartButton">Restart Quiz</button>
            </div>`
            );
    } else if (score < 8 && score >= 5) {
        $('.quizForm').html(`
            <div class="summary">
            <h3>Baby animal enthusiast</h3>
            <img src="GotItDude.webp" alt="You got it dude animated gif"/>
            <p>You got ${score} / 10</p>
            <p>Just a little more and you would be perfect!</p>
            <button class="restartButton">Restart Quiz</button>
            </div>`
            );
    } else {
        $('.quizForm').html(`
            <div class="summary">
            <h3>Baby animal expert alert!</h3>
            <img src="https://media.giphy.com/media/5IMcyqKbkg0O4/giphy.gif" alt="Leonardo DiCaprio toasting animation gif"/>
            <p>You got ${score} / 10</p>
            <p>You must be a pro. Cheers!</p>
            <button class="restartButton">Restart Quiz</button>
            </div>`
            );
    };
};

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
    $('main').on('click', '.restartButton', function (event) {
         location.reload(false);
         });
}

//define all quiz functions
function buildQuiz () {
    startQuiz();
    renderCurrentQuestion();
    selectAnswer();
    renderNextQuestion();
}

//invoke all quiz functions
buildQuiz();
