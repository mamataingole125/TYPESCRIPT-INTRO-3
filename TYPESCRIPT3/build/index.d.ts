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
declare const getUserType: (obj: User | Admin) => string;
declare const person1: User;
declare const person2: Admin;
