var Mytext = (function () {
    function Mytext(valueTxt) {
        this.valueTxt = valueTxt;
    }
    ;
    Mytext.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    ;
    Mytext.prototype.print = function (value) {
        console.log("Text: " + value);
    };
    ;
    return Mytext;
}());
var t = new Mytext("my text ...");
console.log(t.countTxt());
t.print("Test");
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        return this.name;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.getPower = function () {
        return this.power;
    };
    ;
    return Car;
}());
var camaro = new Car("Camaro", "Red", 45);
console.log(camaro.getCar(), camaro.getColor(), camaro.getPower());
//# sourceMappingURL=main.js.map