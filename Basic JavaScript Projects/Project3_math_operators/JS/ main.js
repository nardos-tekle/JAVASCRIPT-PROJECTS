//first function for subtraction
function My_first_function() {
    var subtraction = 10 - 5;
    document.getElementById("math").innerHTML = "10 - 5 = " + subtraction;
}
//second function for multiplication
function Second_function() {
    var multiplication = 1798 * 5632; // this makes the variable name multiplication
    document.getElementById("multiple").innerHTML = "1,798 * 5632 = " + multiplication;
}

// Third function for mutliple operators
function Third_function() {
    var simple_math = (267 + 95) * 20 / 4 - 10;
    document.getElementById("all").innerHTML = "(267 + 95) * 20 / 4 - 10 =" + simple_math;
}

// fourth function for division
function fourth_function() {
    var divide = 100 / 5;
    document.getElementById("divide").innerHTML = "100 / 5 =" + divide;
}

// fifth function for negative numbers
function fifth_function() {
    var y = - 50;
    document.getElementById("negative").innerHTML = "y = " + y;
}

// sixth function for increment operator
function sixth_function() {
    var x = 2000;
    x++;
    document.getElementById("increase").innerHTML = "x =" + x;
}

// seventh function for decrement operator
function seventh_function(){
   var z = 1000;
    z--;
    document.getElementById("decrease") .innerHTML = "z = " + z;
}

// eigth function for random number between 0-50
function eighth_function(){
    var random= Math.random() * 50;
    document.getElementById("random").innerHTML = "0-50 = " + random;

}
