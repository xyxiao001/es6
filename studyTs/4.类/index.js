var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 继承
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log("Animal moved " + distanceInMeters + "m");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log('Woof! Woof!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
}
{
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log('Slithering...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log('Galloping...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake('sammy the python');
    var tom = new Horse('tommy thr Palomino');
    sam.move();
    tom.move(34);
}
{
    // 公共 私有修饰符
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.age = 10;
            this.text = 'text';
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters + "m");
        };
        return Animal;
    }());
    var dog = new Animal('dog');
    console.log(dog);
    // 私有 不能直接访问
    // console.log(dog.age)
    // protected 可以在子类访问
    // console.log(dog.text)
}
{
    // 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
    var animal = /** @class */ (function () {
        function animal() {
        }
        animal.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return animal;
    }());
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department name: " + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Accounting and Auditing') || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department = void 0;
    console.log(department);
    department = new AccountingDepartment();
    console.log(department);
    department.printName();
    department.printMeeting();
    // department.generateReports()
    // 错误: 方法在声明的抽象类中不存在
}
