function sayHi(name: string) :string {
    return `Good morning! ${name}`
}
console.log(sayHi("Bev"));

function citySayHi(name: string, city?: string): string | object {
    if(city) {
        return {
            name,
            city
        };
    }
    return `Good morning! ${name} - city sayHi`
}

console.log(citySayHi("Bev", "Seattle"));

//////// Union type 

type twoTypeResponse = string | object;

function typeSayHi(name: string, city?: string) {
    if(city) {
        const response: object = {
            name,
            city
        };
    } else {
        const response: object = { name: `Hi, ${name}`}
    }

    return response;
    // return `Good morning! ${name} - type sayHi`
}

console.log(typeSayHi("Bev", "Hong Kong"));

const response: twoTypeResponse = typeSayHi("Bev", "Burien");
const city = response.city;
console.log(city);

// refactor twoTypeResponse - because we are always returning object
type refactorTwoTypeResponse = {
    name: string;
    city?: string;
};
// typeSayHi was using twoTypeResponse, switch to refactorTwoTypeResponse

const favoriteFodd = response.favoriteFood;
console.log();

//////// Code refactoring 01

type personInfo = {
    name: string;
    city?: string;
}

function sayHello1(info: personInfo) {
    if(info.city) {
        const response: personInfo = {
            name: info.name,
            city: info.city,
        };
    } else {
        const response: personInfo = { name:  `Hi, ${info.name}` }
    }

    return response;
}


//////// Code refactoring 02

function sayHello2(info: personInfo) : string {
    if(info.city) {
        const response: string = `Hi, ${info.name} from ${info.city}`;
        return response;
    } else {
        const response: string = `Hi, ${info.name}`;
        return response;
    }
}

//////// Example 03

type FullName = {
    firstName: string;
    middleName?: string;
    lastName: string;
    prefix:  Prefix
}

type Prefix = "mrs" | "ms" | "mr"

type LastName = {
    prefix: Prefix;
    lastName: string;
}

type FancyName = {
    firstName: string;
    middleName?: string;
    lastName: string;
    prefix:  Prefix
}

type NickName = {

}

type Name = LastName | FullName | NickName;

//////// Example 04

function VeganSayHi(name: string, city?: string, isVegan: boolean) {
    if(city) {
        const response: object = {
            name,
            city
        };
    } else {
        const response: object = { name: `Hi, ${name}`}
    }

    return response;
    // return `Good morning! ${name} - type sayHi`
}

console.log(VeganSayHi("Bev", "Hong Kong", false));