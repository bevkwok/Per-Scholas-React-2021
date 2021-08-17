function sayHi(name) {
    var message = "Good day, ";
    return message + " " + name;
}
console.log(sayHi("Bev"));
// example of type annotaion for a function argument
function sayHiTS(nameTS) {
    // example of type annotation for a variable
    var messageTS = "Good morning, ";
    return messageTS + " " + nameTS;
}
console.log(sayHiTS("Beverly"));
//// tsc --watch *.ts 
var sunnyMessage = function (isItSunny) {
    if (isItSunny) {
        return "sunny";
    }
    return "cloudy";
};
console.log(sunnyMessage(true));
