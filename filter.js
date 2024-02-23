const numbers = [1, 5, 7, 9, 12, 15];

const players = [75, 65, 67, 72, 55, 59];
// const filtering = players.filter(p => p > 70);
// const filtering = players.filter(p => p > 50);
const filtering = players.filter(p => p %2 !==0);
console.log(filtering);