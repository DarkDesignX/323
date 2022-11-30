//Aufgabe 1

const name = "Denis";

const person = {
    firstName: "Denis",
    lastName: "Basler",
    age: 18,
};

const newPerson1 = {
    ...person,
    callsign: callsign = "Black Viper",
};

const newPerson2 = {
    ...person,
    age: person.age = 19
};

const { firstName, lastName} = person;

const newPerson = {
    firstName: firstName,
    lastName: lastName,
};

console.log(newPerson);