{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('123!');
    console.log(greeter.greet());
}
