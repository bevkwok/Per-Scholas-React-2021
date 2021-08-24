type Operation = 'multiply' | 'add' | 'divide';

type Result = number;

const calculator = (a: number, b: number, op : Operation) : Result => {
    switch(op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if( b === 0) throw new Error('Can\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
}

try {
    console.log(calculator(1, 5 , 'divide'))
    } catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}

// type Connector = 'multiply' | 'add' | 'divide';

// type CalculatorFn = number | string;

// const multiplicator = (a: number, b: number, printText: string) => {
//     console.log(printText, a * b);
// }

// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is: ');

// const calculator = (a: number, b: number, op: Connector) : CalculatorFn => {
//     if(op === 'multiply') {
//         return a * b;
//     } else if (op === 'add') {
//         return a + b;
//     } else if (op === 'divide') {
//         if(b === 0) return 'this cannot be done';
//         return a/b;
//     }
// }