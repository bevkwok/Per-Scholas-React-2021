function sayHi(name) {
    return "Good morning! " + name;
}
console.log(sayHi("Bev"));
function citySayHi(name, city) {
    if (city) {
        return {
            name: name,
            city: city
        };
    }
    return "Good morning! " + name + " - city sayHi";
}
console.log(citySayHi("Bev", "Seattle"));
function typeSayHi(name, city) {
    if (city) {
        var response_1 = {
            name: name,
            city: city
        };
    }
    else {
        var response_2 = { name: "Hi, " + name };
    }
    return response;
    // return `Good morning! ${name} - type sayHi`
}
console.log(typeSayHi("Bev", "Hong Kong"));
var response = typeSayHi("Bev", "Burien");
var city = response.city;
console.log(city);
// typeSayHi was using twoTypeResponse, switch to refactorTwoTypeResponse
var favoriteFodd = response.favoriteFood;
console.log();
function sayHello1(info) {
    if (info.city) {
        var response_3 = {
            name: info.name,
            city: info.city
        };
    }
    else {
        var response_4 = { name: "Hi, " + info.name };
    }
    return response;
}
//////// Code refactoring 02
function sayHello2(info) {
    if (info.city) {
        var response_5 = "Hi, " + info.name + " from " + info.city;
        return response_5;
    }
    else {
        var response_6 = "Hi, " + info.name;
        return response_6;
    }
}
//////// Example 04
function VeganSayHi(name, city, isVegan) {
    if (city) {
        var response_7 = {
            name: name,
            city: city
        };
    }
    else {
        var response_8 = { name: "Hi, " + name };
    }
    return response;
    // return `Good morning! ${name} - type sayHi`
}
console.log(VeganSayHi("Bev", "Hong Kong", false));
