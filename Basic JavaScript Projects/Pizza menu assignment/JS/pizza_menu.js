function getReceipt() {
    var text1="<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i= 0; i <sizeArray.length; i++) { // this statement is to make sure to list the elements in the array
        if (sizeArray[i].checked) { // only if they have been checked in the checkbox or radio button
            var selectedSize = sizeArray[i].value; // this variable will then post the value of the element 
            text1= text1+selectedSize+"<br>";

        }
    }
    if (selectedSize === "single-slice") {
        sizeTotal = 6;
    } else if (selectedSize === "Personal-Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Meduim-Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large-Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra-Large-Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal+ ".00");
    console.log("size text1: " +text1); 
    console.log("subtotal: $" + runningTotal+ ".00"); 
    getTopping(runningTotal, text1);
    

};

function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByName("Topping");
    for (var j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked) {  // only if they have been checked in the checkbox or radio button
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { 
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " +toppingCount);
    console.log(toppingCount+ "topping - 1 free topping = " + "$" +toppingTotal+".00" );
    console.log("topping text1: " + text1);
    console.log("Purchase Total " +"$" + runningTotal+ ".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    
};

