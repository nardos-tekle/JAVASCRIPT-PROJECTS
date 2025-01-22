function Call_Loop(){
    var Number = " ";
    var Z = 50;
    while (Z < 100){
        Number += "<br>" + Z;
        Z++;
        document.getElementById("Loop").innerHTML = Number;
    }
}
