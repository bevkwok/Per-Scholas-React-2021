console.log('----- you are in the TS file-----');

function helloMessage(name: string) {
    return 'hello, world! my name is ' + name;
}

const myName = helloMessage('Bev');
console.log(myName);
