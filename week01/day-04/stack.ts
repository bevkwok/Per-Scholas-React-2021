console.log("Let's learn stack");

const array: Array<string> = ["a", "b", "c", "d"];

const otherArray = new Array();

array.forEach((element, index) => {
    console.log("array index = ", index);
    console.log("element at index = ", element);
})

// class MyStack implements MyStackInterface {
//     data: any

//     constructor(initialData) {
//         this.data = initialData;
//     }

//     // push needs to put something on the stack
//     push: (item: any) => {
//         data.push(item);
//     };

//     // pop needs to take something off the stack
//     pop: null;
// }

// type pushObject = 

interface MyStackInterface {
    data: Array<any>;
    push: (a: any) => void;
    pop: (a: any) => any;
}

const BadStack: MyStackInterface = {
    data: [],
    push: (item) => null,
    pop: (item) => null,
}

