
const combine = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(combine([1, 2]));
console.log(combine([3, 4, 5]));
console.log(combine([5, 6, 7, 8]));
