const { z, x, ...others } = { x: 2, y: 3, z: 4, name: 'azad', age: 27 }; //destructuring object

const [first, second, ...remaining] = ['jodu', 'modu', 'kodu', 'shodu']; //destructuring array