var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car("Camaro", "Yellow", 45);
camaro.printCar();
var Car2 = (function () {
    function Car2(newName, newColor, newPower) {
        this._name = newName;
        this._color = newColor;
        this._power = newPower;
        Car2.list.push(newName);
    }
    ;
    Object.defineProperty(Car2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car2.prototype.setName = function (value) {
        this._name = value;
    };
    Car2.prototype.getName = function () {
        return this._name;
    };
    Car2.list = [];
    return Car2;
}());
var ferrari = new Car2("Ferrari", "red", 50);
//ferrari._name = "Camaro";
console.log(Car2.list);
console.log(ferrari);
var camaro2 = new Car2("Camaro2", "Red", 56);
console.log(Car2.list);
ferrari.name = "Ferrari2";
console.log(ferrari.name);
ferrari.setName("Ferrari3");
console.log(ferrari.getName());
//# sourceMappingURL=main.js.map