$(function(){
    //document ready
});

var timeLeft = 75 ;
var currentQ = 0 ;

function gameOver() {
    $('h6').remove()
    $('.card-title').html('Quiz Complete');
    $('.card-text').html('<input type="text" name="initials" alt="initials" id="initials">');
    $('.btn').remove();
    $('.card-body').append('<button type="button" id="scoreBtn" class="btn btn-primary">');
    $('#scoreBtn').on('click', hiScores);
};

function hiScores() {
    var leaderBoard = JSON.parse(localStorage.getItem('leaderBoard'));
    var initials = $('#initials').value;
    leaderBoard.initials = initials;
    leaderBoard.score = timeLeft;
    $('.card-title').html('Your Score');
    $('.card-text').html(leaderBoard.initials + ' ' + leaderBoard.score);
    $('.btn').remove();
};

function answer() {
    if (this.id === questions[currentQ].a) {
        currentQ = ++currentQ;
        loadQ();
    } else {
        timeLeft = timeLeft - 15;
        $('h6').remove()
        $('.card-body').append('<h6>Incorrect</h6>');
    }
    console.log('answer')
};

function loadQ() {
    $('h6').remove()
    $('.card-title').html('Question ' + (currentQ + 1));
    $('.card-text').html('' + questions[currentQ].q);
    $('.btn').remove();
    $('.card-body').append('<button type="button" id="' + questions[currentQ].choices[0] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[0] + '</button>', '<button type="button" id="' + questions[currentQ].choices[1] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[1] + '</button>', '<button type="button" id="' + questions[currentQ].choices[2] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[2] + '</button>', '<button type="button" id="' + questions[currentQ].choices[3] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[3] + '</button>');
    $('.a-btn').click(answer);
console.log('loadQ');
};

function quizStart() {
    var stpWtch = setInterval(function() {
        if (timeLeft > 0 && currentQ < 5) {
            timeLeft = --timeLeft;
            $('.timer').html(timeLeft + 's');
            } else {
                clearInterval(stpWtch)
                gameOver()
            }
    }, 1000);
    loadQ();
console.log('quizStart');
};

$('.btn-lg').click(quizStart);





console.log('click1')
console.log('click2')