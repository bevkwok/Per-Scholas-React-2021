/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
 -
|_|
 ​
*/
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
var pizzaSide = "|";
var pizzaTopping = ".";
function buildPizzaTop(width) {
    if (width === void 0) { width = 1; }
    // default pizzaTop
    var pizzaTop = " -";
    // depends on the pizza width, make pizzaTop wider
    for (var i = 1; i < width; i++) {
        pizzaTop += "-";
    }
    return pizzaTop;
}
function buildPizzaBody(width) {
    if (width === void 0) { width = 1; }
    // default = "| ."
    var pizzaBody = pizzaSide + " ";
    // depends on the pizza width, add extra topping
    for (var i = 1; i < width; i++) {
        pizzaBody += pizzaTopping;
    }
    // add one more pizzaSide at the end
    return pizzaBody + pizzaSide;
}
function buildPizzaBottom(width) {
    if (width === void 0) { width = 1; }
    // default pizzaBottom
    var pizzaBottom = "|_";
    // depends on the pizza width, make pizzaBottom wider
    for (var i = 1; i < width; i++) {
        pizzaBottom += "_";
    }
    // add one more pizzaSide at the end
    return pizzaBottom + pizzaSide;
}
function drawSmallPizzaSlice() {
    return (buildPizzaTop() + "\n" + buildPizzaBottom());
}
function drawMediumPizzaSlice() {
    return (buildPizzaTop(2) + "\n" + buildPizzaBottom(2));
}
function drawLargePizzaSlice() {
    return (buildPizzaTop(2) + "\n" + buildPizzaBody(2) + "\n" + buildPizzaBottom(2));
}
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
