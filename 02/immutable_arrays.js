//Aufgabe 2

const person = [
    { id: 1, name: "Denis Basler", age: 18 },
    { id: 2, name: "Eva Scarton", age: 18 },
    { id: 3, name: "Ariane Oberson", age: 17 }
]; 

const person2 = [
    { id: 1, name: "Denis Basler", age: 18 },
    { id: 2, name: "Eva Scarton", age: 18 },
    { id: 3, name: "Ariane Oberson", age: 17 },
];

const person3 = [
    ...person2,
    { id: 4, name: "Billie Eilish", age: 20 },
];

const person4 = person3.map(changeName);
function changeName(person) {
    if (person.id === 4) {
        return { ...person, name: "Billie Eilish Pirate Baird O’Connell" };
    }
    return person;
};

const person5 = person4.filter((person) => {
    return person.id !== 3;
});

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = reviews.reduce((a, g) => a + g);
const average = total / reviews.length;

const groupByReview = (groups, review) => {
    const { bad = 0, ok = 0, good = 0 } = groups;
    if (review >= 4) {
        return { ...groups, good: good + 1 };
    }
    if (review >= 2.5) {
        return { ...groups, ok: ok + 1};
    }
    return { ...groups, bad: bad + 1};
}; 

const reviewGroups = reviews.reduce(groupByReview, {});
console.log(reviewGroups)

