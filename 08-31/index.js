// var, let 값을 선언한 이후에도 바꿔도 돼요!!!!
var a = 3;
let b = 3;
// 값을 선언한 이후에 바꾸면 안돼요!!!!
const c = 3;
// console.log('a :', a);
// console.log('b :', b);
// console.log('c :', c);
a = 5;
var aPlusB = a + b;
console.log('a+b=', aPlusB);
console.log('a-b=', a-b);
console.log('a*b=', a*b);
console.log('a/b=', a/b);
console.log('a%b=', a%b);
// a = a + 4;
a += 4;
console.log('a를 9로 만드는 방법', a);

var e = 3;
var result = --e;
console.log('e:', e);
console.log('result:', result);

var f = true;
var g = false;

console.log('f:', f);
console.log('g:', g);

var aa = 3;
var bb = 3;

console.log('aa < bb :', aa < bb);
console.log('aa <= bb :', aa <= bb);
console.log('aa > bb :', aa > bb);
console.log('aa >= bb :', aa >= bb);
console.log('aa == bb :', aa == bb);
console.log('aa != bb :', aa != bb);