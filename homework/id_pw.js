/**
 * id = "easy1004"
 * pw = "123456"
 * 
 * user_id = "easy1004"
 * user_pw = "123456"
 * 
 * 중첩 if 문을 사용하여 
 * 
 * 아이디가 일치하지 않으면 console.log("아이디가 일치하지 않습니다.")
 * 아이디는 일치하는데 비밀번호가 일치하지 않으면
 * console.log("비밀번호가 일치하지 않습니다.")
 * 아이디, 비밀번호 모두 일치하면
 * console.log("모두 일치 합니다.")
 */




// 남자인데 나이가 20살 이상이냐 아니냐
var a = 'man';
var age = 30;
if (a == 'man') {
    if (age >= 20) {
        console.log('남자인데 20살 이상입니다.')
    } else {
        console.log('남자인데 20살 이하입니다.')
    }
} else {
    if (age >= 20) {
        console.log('여자인데 20살 이상입니다.')
    } else {
        console.log('여자인데 20살 이하입니다.')
    }
}