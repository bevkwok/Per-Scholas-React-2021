// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

function possibleBonus(a ,b) {
    const numA = parseInt(a);
    const numB = parseInt(b);
    if (numA > numB) {
        return false
    } else if (numB - numA > 6) {
        return false
    } else {
        return true
    }
}

// https://edabit.com/challenge/ENWFBL4jbTgLbSqwS

const plusBase = (base) => {
    const makePlusFunction = (addNum) => base + addNum
    return makePlusFunction();
}

console.log(plusBase(2));

