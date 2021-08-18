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

const pizzaSide: string = "|";
const pizzaTopping: string = "."

function buildPizzaTop(width: number = 1): string {
    let pizzaTop = " -";
    for(let i = 1; i < width; i++){
        pizzaTop += "-";
    }
    return pizzaTop;
}

function buildPizzaBody(width: number = 1): string {
    let pizzaBody = pizzaSide + " "; // |.

    for(let i = 1; i < width; i++){
        pizzaBody += pizzaTopping;
    }

    return pizzaBody + pizzaSide; 
}

function buildPizzaBottom(width: number = 1): string {
    let pizzaBottom = "|_"
    for(let i = 1; i < width; i++){
        pizzaBottom += "_";
    }
    return pizzaBottom + pizzaSide;
}

function drawSmallPizzaSlice() {
    return(buildPizzaTop() + "\n" + buildPizzaBottom());
}
​
function drawMediumPizzaSlice() {
    return(buildPizzaTop(2) + "\n" + buildPizzaBottom(2));
}

function drawLargePizzaSlice() {
    return(buildPizzaTop(2) + "\n" + buildPizzaBody(2) + "\n" + buildPizzaBottom(2));
}
​

function drawAnyPizzaSlice(length: number, width: number) {
    if(length === 1 && width === 1) {
        return drawSmallPizzaSlice();
    } else if (length === 1 && width === 2) {
        return drawMediumPizzaSlice();
    } else if (length === 2 && width === 2) {
        return drawLargePizzaSlice()
    } else {
        let longPizzaBody = buildPizzaBody(width) + "\n";
        if(length > 2) {
            for(let i = 1; i < length; i++) {
                longPizzaBody += buildPizzaBody(width) + "\n";
            }
        }
        return(buildPizzaTop(width) + "\n" + longPizzaBody + buildPizzaBottom(width));
    }
}
​
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice(3, 8));