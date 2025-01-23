function food_function(){
    var food_output;
    var food = document.getElementById("food_input").value;
    var food_string = "  " + "is a very tasty dish!";
    switch(food){
        case "Pepperoni Pizza":
        food_output = "Pepperoni Pizza" + food_string;
        break;
        case "Chicken Alrefdo":
            food_output = "Chicken Alrefdo" + food_string;
            break;
        case "Sushi":
            food_output = "Sushi" + food_string;
            break;
        case "Lasgna":
            food_output = "Lasgna" + food_string;
            break;
        case "Grilled Salmon":
            food_output = "Grilled Salmon" + food_string;
            break;
            default:
                food_output = "  " + "Please enter a the name exactly (cap sensitive) written on the above list";
    }
    document.getElementById("id_name").innerHTML = food_output;

}