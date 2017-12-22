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
// 接口
// 普通的一个例子
{
    var printLabel = function (labelledObj) {
        console.log(labelledObj.label);
    };
    var myObj = {
        size: 10,
        label: 'Size 10 Object'
    };
    printLabel(myObj);
}
// 接口方式
{
    var printLabel = function (labelledObj) {
        console.log(labelledObj.label);
    };
    var myObj = {
        size: 10,
        label: 'Size 10 Object'
    };
    printLabel(myObj);
}
{
    var createSquare = function (config) {
        var newSquare = {
            color: 'white',
            area: 100
        };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    };
    var mySquare = createSquare({
        color: 'black',
        width: 30
    });
    console.log(mySquare);
}
{
    // 只读 不可修改
    var p1 = {
        x: 10,
        y: 20
    };
    // p1.x = 5 error
}
{
    var search = function (source, substring) {
        var result = source.search(substring);
        return result > -1;
    };
    console.log(search('sha', 's'));
    console.log(search('sha', 'x'));
}
{
    var arr = ['bob', 'fred'];
    var s = arr[0];
    console.log(s);
}
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
}
