function my_dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Golden",
        Breed: "Corgie",
        Age: "Robot",
        Sound:"Bark",
    };
    delete Animal.Sound;
    document.getElementById("dictionary").innerHTML= Animal.Sound;
}

