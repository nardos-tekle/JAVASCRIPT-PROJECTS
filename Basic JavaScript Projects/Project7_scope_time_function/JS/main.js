var Y = 20;
function Add(){
    document.write(50+ Y + "<br>");
}

function addition(){
    var F = "20"; 
    console.log(F + 100);
}

function Time_function(){
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";

    }
    else if (Time >= 12 == Time < 10){
        Reply = "It is afternoon";
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}