const getUserType = (obj) => {
    return obj.type;
};
const person1 = {
    type: 'user',
    name: "doremon",
    age: 15,
    occupation: "Software developer",
};
const person2 = {
    type: 'admin',
    name: "nobita",
    age: 10,
    role: "FSD",
};
console.log(getUserType(person1));
console.log(getUserType(person2));
//# sourceMappingURL=index.js.map