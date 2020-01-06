var timeLeft = 75 ;
var currentQ = 0 ;

function countDown() {
    timeLeft = timeLeft--;
}

function nextQ() {

}

function quizStart() {
    setInterval(countDown, 1000);
    $('.card-title').html('Question ' + (currentQ + 1));
    $('.card-text').html(questions[currentQ].q);
    $('.btn').remove();
    $('.card-body').append('<button type="button" class="btn btn-primary">' + questions[currentQ].choices[0] + '</button>', '<button type="button" class="btn btn-primary">' + questions[currentQ].choices[1] + '</button>', '<button type="button" class="btn btn-primary">' + questions[currentQ].choices[2] + '</button>', '<button type="button" class="btn btn-primary">' + questions[currentQ].choices[3] + '</button>');
};

$('.btn-lg').on('click', quizStart());