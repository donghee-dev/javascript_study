/**
 * 3단 구구단을 출력해봅시다~~
 */
var result = "";
for (var i=1; i<6; i++) {
    for (var j=0; j<i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);