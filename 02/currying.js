//Aufgabe 3

let students = [ 'Joe','Jen', 'Steph', 'Allen', 'Gina',
];

let grade = [88, 94, 77, 60 ,54,]

const messageStudent = (message) => {
    function messageName(name) {
        return `${message} ${name}!`;
    }

    return messageName;
}

const messageStudentGrade = (message) => {
    function messageGrade(grade) {
        return `${message} ${grade}!`;
    }

    return messageGrade;
}

console.log(students.map(messageStudent('Hello')));
console.log(grade.map((messageStudentGrade('You have a score of'))));



