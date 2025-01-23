// Call for the constant_function from HTML//
function constant_function(){ // Keeps Musical.Instrument to declaring the string sequence as an constant value to the string sequence.//
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.type = "piano"; //Declaring another value under musical.instrument using .type//
    Musical_Instrument.price = "500"; //Declaring another value under musical.instrument using .price//
    document.getElementById("constant").innerHTML = "The cost of the "+ "  " + Musical_Instrument.type + "  " +"was " + "   " + Musical_Instrument.price;
}



