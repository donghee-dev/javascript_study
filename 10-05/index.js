let koToday = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul'
});

let today = new Date();

console.log(today.getFullYear()); // 연도
console.log(today.getMonth() + 1); // 월
console.log(today.getDate()); // 일
console.log(today.getDay()); // 요일
console.log(today.getHours()); // 시
console.log(today.getMinutes()); // 분
console.log(today.getSeconds()); // 초