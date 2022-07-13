interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

const getUserType=(obj:User | Admin ) : string=>{
    return obj.type
}

const person1 :User= {
    type: 'user',
    name: "doremon",
    age: 15,
    occupation: "Software developer",
}

const person2:Admin ={
    type: 'admin',
    name: "nobita",
    age: 10,
    role: "FSD",
}


console.log(getUserType(person1))

console.log(getUserType(person2))