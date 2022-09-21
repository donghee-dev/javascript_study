var result = 0;
for (var i = 0; i < 5; i++) {
    for (var j = 4; j > 0; j--) {
        if (i < j) {
            result += " ";
        } else {
            result += "*";
        }
    }
    result += "\n";
}
console.log(result);