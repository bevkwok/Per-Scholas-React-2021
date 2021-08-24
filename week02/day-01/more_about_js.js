const isSunny = [true, false, true, false, true];

function printThing(element, index) {
    console.log(element + "sunny or not at index" + index);
}

isSunny.forEach(printThing);

const mappedArray = isSunny.map((element, index) => {
    console.log(index + ' has element ' + element);
    if (element) {
        return "sunny";
    } else {
        return "cloudy";
    }
})

console.log(mappedArray);

const filteredArray = isSunny.filter(isItSunny => isItSunny);

const mappedArray2 = filteredArray.map((element, index) => { return "sunny" });

console.log(filteredArray);

console.log(mappedArray2);

const both = isSunny
.filter(isItSunny => isItSunny)
.map(sunnyBoolean => "sunny");

console.log(both);