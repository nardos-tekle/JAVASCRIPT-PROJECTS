function christmas(Year, Director, Percent){
    this.christmas_Year= Year;
    this.christmas_Director = Director;
    this.christmas_Percent = Percent;
}
var Klaus = new christmas("2019","Sergio Pablos", "95%");
var Elf = new christmas("2003","Jon Favreau","86%" );
var Home_Alone = new christmas("1990","Chris Columbus", "66%");

function my_function(){
    document.getElementById("christmas_favs") .innerHTML= "The movie Elf was made in the year" + " " +  Elf.christmas_Year + "  " +"Directed by:"  + " " + Elf.christmas_Director + ". " + "It recieved a rotten tomato score of:"  +  "  " + Elf.christmas_Percent;
}
