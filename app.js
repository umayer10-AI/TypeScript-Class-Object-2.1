"use strict";
// class A {
//     constructor(public name: string, public age: number){}
Object.defineProperty(exports, "__esModule", { value: true });
//         getName() {
//             return this.name;
//         }
//         setName(v:string){
//             this.name = v
//         }
// }
// const b = new A("Umayer", 21)
// // b.getName()
// // b.name="oka oka"
// b.setName("Lala")
// // console.log(b.getName())
// console.log(b)
class A {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get getName() {
        return this._name;
    }
    set setName(v) {
        this._name = v;
    }
}
const b = new A("Umayer", 21);
b.setName = "hola";
console.log(b);
//# sourceMappingURL=app.js.map