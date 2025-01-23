// declares the variable car with a block scope//
let car = {
    make: "Toyota", 
    model: "Camry", 
    year: "2025", 
    color: "black",
    description : function() { // Value description is given a function to return the following values under the variable car.description//
        return "the car is a" + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object") .innerHTML = car.description();
