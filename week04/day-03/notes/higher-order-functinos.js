// https://www.youtube.com/watch?v=rRgD1yVwIvE

const friends = [
    { name: 'Susan', gender: 'F', age: 25, height: 159 },
    { name: 'Tom', gender: 'M', age: 19, height: 179 },
    { name: 'Jason', gender: 'M', age: 21, height: 168 },
    { name: 'Kelly', gender: 'F', age: 18, height: 155 },
    { name: 'Peter', gender: 'M', age: 28, height: 173 },
    { name: 'Brian', gender: 'M', age: 24, height: 172 },
    { name: 'Alex', gender: 'F', age: 20, height: 162 },
    { name: 'Bob', gender: 'M', age: 29, height: 170 },
    { name: 'James', gender: 'M', age: 26, height: 167 }
]

const allAges = friends.map(friend => friend.age)
console.log(allAges);

const canDrink = friends.filter(friend => friend.age >= 21)
console.log(canDrink);

// const sortAgeOlderFirst = friends.sort((a,b) => (a.age < b.age ? 1 : -1))
const sortAgeOlderFirst = friends.sort((a,b) => (b.age - a.age))

console.log(sortAgeOlderFirst);
// const sortAgeYoungerFirst = friends.sort((a,b) => (a.age > b.age ? 1 : -1))
const sortAgeYoungerFirst = friends.sort((a,b) => (a.age - b.age))
console.log(sortAgeYoungerFirst);

const ageSum = friends.reduce((total, friend) => {
    return total + friend.age
}, 0)
console.log(ageSum);

const ageSum2 = friends.reduce((total, friend) => total + friend.age, 0)
console.log(ageSum2);

const combined = friends
    .map(friend => friend.age * 2)
    .filter(age => age >=40)
    .sort((a, b) => a - b);

console.log(combined);