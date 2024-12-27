function ride_function(){
    var Height , Can_ride;
    Height = document.getElementById("height") .value;
    Can_ride = (Height < 52) ? "You are too short to ride": "You are tall enough to ride";
    document.getElementById("ride") .innerHTML = Can_ride;
}