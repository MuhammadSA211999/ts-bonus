"use strict";
//implement this Model in class
class Person {
    constructor(firstName, lastName, age) {
        this.data = { firstName, lastName, age };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        };
    }
}
const user1 = new Person('Muhammad', 'SA', 24);
const fullName = user1.methods.fullName();
console.log(fullName);
