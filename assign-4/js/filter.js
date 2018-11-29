function filtArray(value) {
    return value >= 10;
}

let newArray = [22, 7, 13, 5, 8, 57, 94, 73].filter(filtArray);

console.log(newArray);