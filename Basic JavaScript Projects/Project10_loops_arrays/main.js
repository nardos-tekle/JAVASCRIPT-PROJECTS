// Creating variables//
    var Number = " ";
    var Z = 50;
    while (Z < 100){   //Like an If statment this will execute until it reaches to 100//
function Call_Loop(){ // Calls the call_loop() from HTML to create an iteration counting from 50-100.// 
        Number += "<br>" + Z;
        Z++; //using ++ to add one each-time.//
        document.getElementById("Loop").innerHTML = Number;
    }
}
