// class A {
//     constructor(public name: string, public age: number){}

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
    constructor(public _name: string , public age?: number){}

    get getName(){
        return this._name
    }

    set setName(v: string) {
        this._name = v
    }
}
const b = new A("Umayer",21)
b.setName = "hola"
console.log(b)