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
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get getName() {
        return this._name;
    }
    get myAge() {
        return this._age;
    }
    set setName(v) {
        this._name = v;
    }
    set setAge(v) {
        this._age = v;
    }
}
const b = new A("Umayer", 21);
b.setName = "hola";
b.setAge = 30;
console.log(b);
//# sourceMappingURL=app.js.map