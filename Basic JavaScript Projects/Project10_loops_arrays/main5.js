//calls the cat_pics function from HTML//
function cat_pics(){
    var cat = []; // declares the [] value under the cat variable//
    cat[0] = "sleeping"; // each index within the cat object are declared with certain properties//.
    cat[1] = "playing";
    cat[2] = "eating";
    cat[3] = "purring";
    document.getElementById("array").innerHTML= "In this picture, the cat is" + "  " + cat[2]+ ".";
}
