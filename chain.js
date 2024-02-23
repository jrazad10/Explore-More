//data access 
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo', price: 65000 },
        { id: 2, name: 'mac', price: 165000 }
    ]
}

console.log(products.data[0].price);

const user = {
    id: 5001,
    name: 'shariful',
    address: {
        street: {
            first: '54/1',
            second : 'goli',
            third : 'nodorai'
        },
        city: 'dhaka'
    }
} 

const user2 = {
    id: 5002,
    name: 'pori',
    address: {
        country: 'bd',
        city: 'ctg'
    }
} 
console.log(user.address.street?.second);
console.log(user2.address.street?.second);