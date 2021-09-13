const students = [

    { name: 'Quincy', grade: 96 },

    { name: 'Jason', grade: 84 },

    { name: 'Alexis', grade: 100 },

    { name: 'Sam', grade: 65 },

    { name: 'Katie', grade: 90 }

];

const studentNameArray = students.map(student => student.name);
console.log(studentNameArray);

const lowerCaseArray = students.map(student => student.name.toLowerCase());
console.log(lowerCaseArray);

const studentGradeArray = students.map(student => student.grade);
console.log(studentGradeArray);

const lowerGradeArray = students.filter(student => student.grade >= 90)
console.log(lowerGradeArray);

const higherGradeArray = students.filter(student => student.grade >= 90).map(student => student.name)
console.log(higherGradeArray);

const averageGrade = (students.map(student => student.grade).reduce((a, b) => (a + b))) / students.length
console.log(averageGrade);
const averageGrade2 = (students.reduce((acc, student) => acc + student.grade, 0)) / students.length
console.log(averageGrade2);


// https://stackoverflow.com/questions/54616313/es6-reduce-to-new-object
const studentsObject = students.reduce((acc, student) => {
    acc[student.name] = student.grade
    return acc
}, {})
console.log(studentsObject);


const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const countPetType = pets.reduce((acc, pet) => {
    acc[pet] ? acc[pet] = acc[pet] + 1 : acc[pet] = 1
    return acc
}, {})
console.log(countPetType);

// https://docs.google.com/document/d/e/2PACX-1vR6kW8Uz1SOXuhe07sD5DuYKmC_iR2ztbyvFhIlcuu8DZviMKFnA9HM4fgcWVOgvn7SY6ETA68s-3nh/pub