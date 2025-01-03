function myfunction(){
    if (new Date() .getHours() < 10) {
        document.getElementById("date") .innerHTML = "How are you today";
    }
}

function age_function() {
    var age = document.getElementById("Age") .value;
    if (age >= 18) {
        vote = "you are old enough to vote!";
    }
    else {
        vote = "you are not old enough to vote!";
    }
    document.getElementById("How_old?") .innerHTML = vote;
}

function time_function() {
    var time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (time < 12 == Time > 0) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time." ;
    }
    document.getElementById("time_function") .innerHTML
}
