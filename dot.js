// const person = {
//     name: 'kodom',
//     job: 'badam'
// }

// const prop = 'job'
// console.log(person.job);
// console.log(person['name']);

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
console.log(cube(2))


const {x, y, z} = {x: 1, y1: 2, z: 3}
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);