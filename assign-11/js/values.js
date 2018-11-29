function values(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else
    {
        return (n - 19) * 3;
    }
}

console.log(values(12));
console.log(values(19));
console.log(values(22));
console.log(values(31));
