console.log("Let's learn stack");
var array = ["a", "b", "c", "d"];
var otherArray = new Array();
array.forEach(function (element, index) {
    console.log("array index = ", index);
    console.log("element at index = ", element);
});
var BadStack = {
    data: [],
    push: function (item) { return null; },
    pop: function (item) { return null; }
};
