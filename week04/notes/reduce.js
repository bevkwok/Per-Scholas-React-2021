// https://24ways.org/2019/five-interesting-ways-to-use-array-reduce/
// 5 ways to use reduce

// reduce takes an array and can return anything
// it's purpose is to condense array into a single value

// Array.reduct()
// accepts 2 arguments
// (callback_method(), starting_value)
// the callback_method also takes 2 arguments
// callback_method(accumulator, current_item_in_loop)
// accumulator = current combined value
// * whatever you return is used as the accumulator for next item in loop

// var myNewArray = [].reduce(function (accumulator, current) {
//     return accumulator;
// }, starting);

//// EX. 1 - add numbers together
const total = [1, 2, 3].reduce((sum, current) => sum + current, 0)
console.log(total);


//// EX. 2 - combine map() and filter() into a single step
const friends = [
    { name: 'Susan', gender: 'F', age: 25, height: 159 },
    { name: 'Tom', gender: 'M', age: 19, height: 179 },
    { name: 'Jason', gender: 'M', age: 21, height: 168 },
    { name: 'Kelly', gender: 'F', age: 18, height: 155 },
    { name: 'Peter', gender: 'M', age: 28, height: 173 },
    { name: 'Brian', gender: 'M', age: 24, height: 172 },
    { name: 'Alex', gender: 'F', age: 20, height: 162 },
]

const over21 = friends
    .filter((friend => friend.age >= 21))
    .map((friend => friend.name));

console.log(over21); // [ 'Susan', 'Jason', 'Peter', 'Brian' ]

const shortOver21 = friends.reduce((acc, friend) => {
    friend.age >= 21 ? acc.push(friend.name) : '';
    return acc
}, [])
console.log(shortOver21); // [ 'Susan', 'Jason', 'Peter', 'Brian' ]


//// EX. 3 - creating markup from an array
const femaleNameList = '<ul>' + friends.reduce((html, friend) => {
    if (friend.gender === 'F') {
        html += `<li>${friend.name}</li>`
    }
    return html;
}, '') + '</ul>';
console.log(femaleNameList);


//// EX. 4 - group similar items in an array together
// https://24ways.org/2019/five-interesting-ways-to-use-array-reduce/