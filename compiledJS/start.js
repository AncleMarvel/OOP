var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DiodeLamp = /** @class */ (function () {
    function DiodeLamp() {
        this.isLighting = false; // Вона може світитися (Оскільки "світитися" є станом об'єкту - роблю поле)
    }
    DiodeLamp.prototype.toggle = function () {
        this.isLighting = !this.isLighting;
    };
    return DiodeLamp;
}());
var Colors;
(function (Colors) {
    Colors[Colors["white"] = 0] = "white";
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["green"] = 2] = "green";
    Colors[Colors["blue"] = 3] = "blue";
})(Colors || (Colors = {}));
var WhiteLamp = /** @class */ (function (_super) {
    __extends(WhiteLamp, _super);
    function WhiteLamp() {
        var _this = _super.call(this) || this;
        _this.color = Colors.white;
        return _this;
    }
    return WhiteLamp;
}(DiodeLamp));
var RgbLamp = /** @class */ (function (_super) {
    __extends(RgbLamp, _super);
    function RgbLamp(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    return RgbLamp;
}(DiodeLamp));
var Garland = /** @class */ (function () {
    function Garland(lampQuantity) {
        this.lampQuantity = 0;
        this.lamps = [];
        this.lampQuantity = lampQuantity;
        for (var i = 1; i <= this.lampQuantity; i++) {
            if (i % 2 == 0) {
                this.lamps.push(new WhiteLamp());
            }
            else {
                var colorName = Colors[Math.random() * 4];
                this.lamps.push(new RgbLamp(Colors[colorName]));
            }
        }
    }
    Garland.prototype.toggle = function () {
        this.lamps.forEach(function (lamp) {
            lamp.toggle();
        });
    };
    Garland.prototype.shine = function () {
        this.lamps.forEach(function (lamp) {
            console.log(lamp.isLighting);
        });
    };
    return Garland;
}());
var garland = new Garland(10);
garland.toggle();
garland.shine();
garland.toggle();
garland.shine();
