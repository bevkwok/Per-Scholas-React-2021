////////
// Syntax: enum EnumName{ property1, property2, property3 };
// value would be 0 (default), subsquent items will increment from first
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 0] = "Black";
    MobilePrice[MobilePrice["Gold"] = 1] = "Gold";
    MobilePrice[MobilePrice["White"] = 2] = "White";
})(MobilePrice || (MobilePrice = {}));
;
var blackPrice = MobilePrice.Black; // 0
var goldPrice = MobilePrice["Gold"]; // 1
var whitePrice = MobilePrice.White; // 2
var LaptopPrice;
(function (LaptopPrice) {
    LaptopPrice[LaptopPrice["Black"] = 2000] = "Black";
    LaptopPrice[LaptopPrice["Sliver"] = 2100] = "Sliver";
    LaptopPrice[LaptopPrice["White"] = 1800] = "White";
})(LaptopPrice || (LaptopPrice = {}));
;
var checkColorUsingPrice = LaptopPrice[1800];
console.log(checkColorUsingPrice); // White
