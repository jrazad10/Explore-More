const products = [
    { id: 1, name: 'lenevo', price: 65000 },
    { id: 2, name: 'asus', price: 45000 },
    { id: 3, name: 'hp', price: 85000 },
    { id: 4, name: 'mac', price: 185000 }
]
//map 
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(p => p.price);
console.log(prices);

//foreach
products.forEach(p => console.log(p.id));

//filter
const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

//find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

//reduce
const total = products.reduce((p, c) => p + c.price, 0);
console.log(total);