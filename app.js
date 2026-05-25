"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(v) {
        this.name = v;
    }
}
const b = new A("Umayer", 21);
// b.getName()
b.name = "oka oka";
// b.setName("Lala")
// console.log(b.getName())
console.log(b);
//# sourceMappingURL=app.js.map