///<reference path="ICar2"/>
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    ;
    return Car;
}());
///<reference path="Car"/>
//comando para compilar tudo no main.js tsc main --out main.js -w
var porsche = new Car("Prosche", "red", 55);
porsche.getCar();
