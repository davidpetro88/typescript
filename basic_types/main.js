var test = true;
var id = 2;
// .................
var decimal = 5.4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//................
var name = "Guilherme";
var car = 'Camaro';
var text = "<p> Name: " + name + " </p>\n            <p> Car: " + car + " </p>\n";
document.body.innerHTML = text;
// .....................
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
var fruits = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);
//...................
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[2]);
//.................
var list = 23;
console.log(list);
list = "String ...";
console.log(list);
function printNumber(num) {
    alert(num);
}
printNumber(32);
//# sourceMappingURL=main.js.map