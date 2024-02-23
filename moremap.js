const numbers = [1, 2, 3, 4, 57, 8, 9];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fiveAdded = numbers.map(num => num + 5);
console.log(fiveAdded);

const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['tom', 'room', 'shhom', 'aaadom'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);