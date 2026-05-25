class A {
    constructor(public name: string, public age: number){}

        getName() {
            return this.name;
        }

        setName(v:string){
            this.name = v
        }

}
const b = new A("Umayer", 21)
// b.getName()
b.name="oka oka"
// b.setName("Lala")
// console.log(b.getName())
console.log(b)