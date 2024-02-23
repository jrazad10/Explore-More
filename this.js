class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const azad = new Person('md azad', 21)
// console.log(azad);
azad.sleep();

const badam = new Person('badam',23)
badam.sleep();

//bhejal
