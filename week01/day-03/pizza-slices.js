/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
 -
|_|
 ​
*/
var pizzaSide = "|";
var pizzaTopping = ".";
function buildPizzaTop(length) {
    if (length === void 0) { length = 1; }
    var pizzaTop = " -";
    for (var i = 1; i < length; i++) {
        pizzaTop += "-";
    }
    return pizzaTop;
}
// console.log(buildPizzaTop(1));
function buildPizzaBody(width) {
    if (width === void 0) { width = 1; }
    var pizzaBody = pizzaSide + " "; // |.
    for (var i = 1; i < width; i++) {
        pizzaBody += pizzaTopping;
    }
    return pizzaBody + pizzaSide;
}
// console.log(buildPizzaBody(2));
function buildPizzaBottom(length) {
    if (length === void 0) { length = 1; }
    var pizzaBottom = "|_";
    for (var i = 1; i < length; i++) {
        pizzaBottom += "_";
    }
    return pizzaBottom + pizzaSide;
}
// console.log(buildPizzaBottom(1));
function drawSmallPizzaSlice() {
    return (buildPizzaTop() + "\n" + buildPizzaBottom());
}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:

 --
|__|
*
*/
function drawMediumPizzaSlice() {
    return (buildPizzaTop(2) + "\n" + buildPizzaBottom(2));
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:

 --
| .|
|__|
 ​
*/
function drawLargePizzaSlice() {
    return (buildPizzaTop(2) + "\n" + buildPizzaBody(2) + "\n" + buildPizzaBottom(2));
}
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 *
 * Small - Length 1 width 1:
 -
|_|
 ​
*
* Medium - Length 1 width 2:

 --
|__|
*
 ​
*
* Large - Length 2 width 2:
*

 --
| .|
|__|
 ​
*/
function drawAnyPizzaSlice(length, width) {
    if (length === 1 && width === 1) {
        return drawSmallPizzaSlice();
    }
    else if (length === 1 && width === 2) {
        return drawMediumPizzaSlice();
    }
    else if (length === 2 && width === 2) {
        return drawLargePizzaSlice();
    }
    else {
        var longPizzaBody = buildPizzaBody(width) + "\n";
        if (length > 2) {
            for (var i = 1; i < length; i++) {
                longPizzaBody += buildPizzaBody(width) + "\n";
            }
        }
        return (buildPizzaTop(width) + "\n" + longPizzaBody + buildPizzaBottom(width));
    }
}
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice(3, 8));
