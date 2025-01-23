// creating variables for a string sequence//
var instrument = ["Piano", "Guitar", "Drummer", "Bass", "Violin"];
var content = " ";
var Y;
function for_Loop() { // Calling for_loop function from HTML file//
    for (Y = 0; Y < instrument.length; Y++) { // placing a for loop to iterate the instrument string sequence only once until the end.//
        content += instrument[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = content;
}
