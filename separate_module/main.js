///<reference path="Color.ts"/>
var ColorModule;
(function (ColorModule) {
    var red = new ColorModule.Color();
    red.name = "Red";
    red.code = "#FF0000";
    console.log(red.getColor());
})(ColorModule || (ColorModule = {}));
var blue = new ColorModule.Color();
blue.name = "Blue";
blue.code = "blue";
console.log(blue);
//# sourceMappingURL=main.js.map