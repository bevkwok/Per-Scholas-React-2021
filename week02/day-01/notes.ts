//////// enum
// Syntax: enum EnumName{ property1, property2, property3 };

// value would be 0 (default), subsquent items will increment from first
enum MobilePrice{Black, Gold, White};

let blackPrice = MobilePrice.Black; // 0
let goldPrice = MobilePrice["Gold"] // 1
let whitePrice = MobilePrice.White; // 2


enum LaptopPrice{Black=2000, Sliver=2100, White=1800};
let checkColorUsingPrice = LaptopPrice[1800];
console.log(checkColorUsingPrice); // White


//////// array
let manufacturers: string[] = ["Samsung", "Apple", "Sony"]