////// Node.js


////// npm - Node Package Manager
// external module for node
// package.json is a description of all of the package we have

////// express - a node framework
// 


///////// Lecture 08/24/2021
////// Module pattern 
// immediately invoked function expression
var MODULE = (function () {
    var moduleObject = {};
    var privateVariable = 1;

    function privateMethod() {
        // ...
    }

    moduleObject.moduleProperty = 1;
    moduleObject.moduleMethod = function () {
        var x = privateMethod(privateVariable);
        return x;
    };

    return moduleObjectl

}());


function showUserInfo(emotion) {
    // like a private variable in a class
    // idea of a closure
    var name = 'Bev';

    function displayName() {
        console.log(`Hi ${name}, you are ${emotion}`);
    }

    return displayName();
}

var message = showUserInfo("happy");
console.log(message);


//// SQLQuery example
function constructSQLQuery(whereClause) {
    var baseQuary = 'SELECT FIRST_NAME, LAST_NAME FROM USERS';

    function executeQuery() {
        console.log(`${baseQuary} ${whereClause}`);
        return (`${baseQuary} ${whereClause}`);
    }

    return executeQuery;
}

var SQLresult1 = constructSQLQuery("WHERE ID = 7");
var SQLresult2 = constructSQLQuery("WHERE AGE > 18");
console.log(SQLresult1);
console.log(SQLresult2);