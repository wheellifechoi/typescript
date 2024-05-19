console.log8(1, 2, 3, 4, 5, 6); //...
function 함수8() {
    var variable = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        variable[_i] = arguments[_i];
    }
    console.log(variable); // [1,2,3,4] 
}
함수8(1);
