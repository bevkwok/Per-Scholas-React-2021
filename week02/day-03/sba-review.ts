// a template literal
type sayHiFunction = (a: Person) => string;
type GroupOfPeople = Array<Person>;

interface PeopleHandler{
    sayHi: sayHiFunction;
    findPerson: (a: number) => Person;
    makeFriend: (a: number) => string;
    getPeopleAge: (a: number) => GroupOfPeople;
}

class MyPeople implements PeopleHandler{
    private people;
    constructor(people: GroupOfPeople) {
        this.people = people;
    }

    sayHi(person: {age: number, nickName: string}) {
        return `Hi, ${person.nickName}! You are ${person.age} old.`
    }

    findPerson(index: number) {
        return people[index];
    }

    makeFriend (index: number): string {
        const thePerson = this.findPerson(index);
        return `Hi, ${thePerson.nickName}. Nice to meet you`;
    }

    getPeopleAge(age: number): GroupOfPeople {
        return this.people.filter(person => person.age === age)
    }

    // getPeopleAge(age: number): Array<Person> {
    //     this.people.filter(person => {
    //         if(person.age === age){
    //             return true;
    //         }
    //         return false;
    //     })
    // }
}

type Person = { age: number, nickName: string };

const people: GroupOfPeople = [
    { age: 22, nickName: 'Tommy' },
    { age: 28, nickName: 'Jane the elder'},
]

people.forEach((person, index) => {
    console.log('Person at ' + index);
    console.log(sayHi(person));
})

const MyPeopleInstance = new MyPeople(people);


function sayHi(person: {age: number, nickName: string}) {
    const age = person.age;
    const nickName = person.nickName;
    return `Hi, ${person.nickName}! You are ${person.age} old.`
}


people.forEach(person => sayHi(person));

