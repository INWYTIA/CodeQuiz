var timeLeft = 75 ;
var currentQ = 0 ;

function countDown() {
    timeLeft = timeLeft--;
}

function answer() {
    if (this.id === questions[currentQ].a) {
        currentQ = currentQ++;
        loadQ();
    } else {
        timeLeft = timeLeft - 15;
        $('p').remove()
        $('.card-body').append('<p>Incorrect</p>');
    }
}

function loadQ() {
    $('p').remove()
    $('.card-title').html('Question ' + (currentQ + 1));
    $('.card-text').html(questions[currentQ].q);
    $('.btn').remove();
    $('.card-body').append('<button type="button" id="' + questions[currentQ].choices[0] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[0] + '</button>', '<button type="button" id="' + questions[currentQ].choices[1] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[1] + '</button>', '<button type="button" id="' + questions[currentQ].choices[2] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[2] + '</button>', '<button type="button" id="' + questions[currentQ].choices[3] + '" class="btn btn-primary a-btn">' + questions[currentQ].choices[3] + '</button>');
}

function quizStart() {
    setInterval(countDown, 1000);
    loadQ()
};

$('.btn-lg').on('click', quizStart());

$('.a-btn').on('click', answer())