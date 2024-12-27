function Function_1() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9; {
            function plus_one() {Starting_point += 1; }
            plus_one();
            return Starting_point;
        }
    }
}