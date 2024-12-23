function my_dictionary(){
    var Animal = {      // Assigns variable to the key-pair collection. 
        Species:"Dog",
        Color:"Golden",
        Breed: "Corgie",
        Age: "Robot",
        Sound:"Bark",
    };
    delete Animal.Sound; // this deletes the sound key-pair. 
    document.getElementById("dictionary").innerHTML= Animal.Sound;  // Links the key-pair to the HTML element. However, the output will be undefined due to code above. 
}

