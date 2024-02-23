const products = [
    { id: 1, name: 'lenevo', price: 65000 },
    { id: 2, name: 'asus', price: 45000 },
    { id: 3, name: 'hp', price: 85000 },
    { id: 4, name: 'mac', price: 185000 }
];


//similar 
class Product {
    country = 'bangladesh';
    constructor(name){
        this.name =  name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
// console.log(lenovo);
// lenovo.speak(`ki bolba bolo`);


class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math');
    }
}
const tapan = new Teacher('tapan', 'math');
console.log(tapan);

const rashid = new Teacher ('rashid', 'english');
console.log(rashid);