
let car = {
    make: "Toyota", 
    model: "Camry", 
    year: "2025", 
    color: "black",
    description : function() {
        return "the car is a" + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object") .innerHTML = car.description();