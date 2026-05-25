class A {
    constructor(public name: string, public age: number){}

        getName() {
            return this.name;
        }

}
const b = new A("Umayer", 21)
// b.getName()
console.log(b.getName())