///<reference path="IProduct.ts"/>
var App;
(function (App) {
    var Product = (function () {
        function Product(name, description, value) {
            this.name = name;
            this.description = description;
            this.value = value;
        }
        ;
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
///<reference path="src/Product.ts"/>
//run app -  tsc app/app.ts --out public/js/app.js
// ou adiciona o w para o watcher
// tsc app/app.ts --out public/js/app.js -w
var App;
(function (App) {
    var p = new App.Product("Book 1", "Code Book", 34.99);
    console.log(p);
    document.getElementById("app").innerHTML = "\n    <div>\n        <ul>\n            <li>" + p.name + " - " + p.description + " - $" + p.value + "</li>\n        </ul>\n    </div>\n    ";
})(App || (App = {}));
