var instrument = ["Piano", "Guitar", "Drummer", "Bass", "Violin"];
var content = " ";
var Y;
function for_Loop() {
    for (Y = 0; Y < instrument.length; Y++) {
        content += instrument[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = content;
}
