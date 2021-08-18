/**
 *Here are the formulas to get information about a circle:
pi is 3.14159
x^2 means "x squared": example: 3^2 = 3*3 = 9
area = pi * radius^2
diameter = radius*2
circumfrence = pi * diameter
 ​
Complete the following functions and add function param and return type annotations
*/
var pi = 3.14159;
function getArea(radius) {
    var area = pi * radius ^ 2;
    console.log("The area of the circle is " + area);
}
function getDiameter(radius) {
    var diameter = radius * 2;
    console.log("The diameter of the circle is " + diameter);
}
function getCircumfrence(radius) {
    var diameter = radius * 2;
    var circumfrence = pi * diameter;
    console.log("The circumfrence of the circle is " + circumfrence);
}
