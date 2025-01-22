function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.type = "piano";
    Musical_Instrument.price = "500";
    document.getElementById("constant").innerHTML = "The cost of the "+ "  " + Musical_Instrument.type + "  " +"was " + "   " + Musical_Instrument.price;
}



