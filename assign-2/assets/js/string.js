function myFunction() {
    var input = document.getElementById("test");
    var word = input.value.split(" ");
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
    }
    input.value = word.join(" ");
}