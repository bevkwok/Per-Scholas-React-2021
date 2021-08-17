function sayHi(name) {
    const message = "Good day, ";
    return `${message} ${name}`;
}

console.log(sayHi("Bev"));

// example of type annotaion for a function argument
function sayHiTS(nameTS: string) {
    // example of type annotation for a variable
    const messageTS: string = "Good morning, "
    return `${messageTS} ${nameTS}`;
}


console.log(sayHiTS("Beverly"));

//// tsc --watch *.ts 



const sunnyMessage = (isItSunny: boolean): string => {
    // : string after the (), enforce this function to return string
    if(isItSunny) {
        return "sunny";
    }

    return "cloudy";
};

console.log(sunnyMessage(true));