function integer(x) {
    return ((Math.abs(100 - x) <= 20) ||
        (Math.abs(400 - x) <= 20));
}

console.log(integer(10));
console.log(integer(90));
console.log(integer(99));
console.log(integer(199));
console.log(integer(200));
