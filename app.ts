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


// class A {
//     constructor(public _name: string , public _age?: number){}

//     get getName(){
//         return this._name
//     }
//     get myAge(){
//         return this._age
//     }

//     set setName(v: string) {
//         this._name = v
//     }
//     set setAge(v: number) {
//         this._age = v
//     }
// }
// const b = new A("Umayer",21)
// b.setName = "hola"
// b.setAge = 30
// console.log(b)

// class A {
//     static version = 2.0

//     static getRandom(){
//         return Math.random()
//     }
// }
// console.log(A.getRandom())

// class A {
//     version = 2.0

//     getRandom(){
//         return Math.random()
//     }
// }
// const b = new A()
// console.log(b.version)


class P{
    constructor(protected amount: number){}

    isPayment(v:number){
        return this.amount > v
    }
}
const b = new P(10)
console.log(b.isPayment(200))