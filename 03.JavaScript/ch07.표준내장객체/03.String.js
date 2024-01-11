// // 문자열(String)

// const { ajaxSetup } = require("jquery");

// let hello = '안녕하세요?';          //

// //속성
// console.log(hello.length);

// /* 
// 한글표기에 대해서
//     한글 표기법
//         1. 국가표준 : EUC-KR, ANSI => 2바이트 완성형
//                     ;ㄱ~ㅎ, ㅏ~ㅣ, 가~히 => MS-Windows에서 채택

//         2. Web표준 : UTF-8 => 초성 + 중성 + 종성 각 1바이트씩 3바이트 조합형
        
//         3. ASCII code : 영문자, 숫자, 특수기호 등등 => 1바이트로 구성

// */
        
// // 메소드(method)
// // 특정변수를 띄울 때, 일반적 / 메소드 이용해서 띄우기
// console.log(hello[1], hello.charAt(1)); 
// console.log(hello + '여러분!', hello.concat('여러분!'));
// console.log(hello.indexOf('하'));       //2, 처음부터 시작해서 '하'로 시작하는 글자가 몇번째에 있는지
// console.log('pineapple'.lastIndexOf('p'));      //거꾸로 p로 시작하는 글자가 몇번째에 있는지??

// // 문자열을 분리 *많이 사용함
// let fruits = '사과, 배, 감, 포도';
// let fruitArray = fruits.split(',');
// console.log(fruitArray);        //[ '사과', ' 배', ' 감', ' 포도' ] 같은 모양으로 만들어 준다. = split


// 문자열 일부분(substring)(중요!)
const today = new Date().toISOString();
console.log(today);             //2024-01-08T02:06:43.877Z 로 출력

// 날짜만 추출 하기 : 2024-01-08만
console.log(today.substring(0, 10));        
console.log(today.substring(0, today.indexOf('T')));    //또 다른 방법
console.log(today.split('T')[0]);

// ex) push p:0 u:1 s:2 h:3
// substring(0,2) = 0에서 2까지만 출력 

// 시간만 추출 : 02:06:00
console.log(today.substring(11,19));
console.log(today.substring(today.indexOf('T')+1, today.indexOf('.')));
console.log(new Date().toLocaleString());           //timezone을 이용

// YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDight(num) {    //두 자리 숫자로 받아주는
    return (num < 10) ? '0'+num : String(num);      //4가 입력되면 '04', 23 ->'23' 문자열로 만들어 줌?
}
function myDateTime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDight(now.getMonth()+1)}-${twoDight(now.getDate())} ` + 
        `${twoDight(now.getHours())}:${twoDight(now.getMinutes())}:${twoDight(now.getSeconds())}`
}

console.log(new Date());
console.log(myDateTime());          //2024-01-08 시:분:초
console.log(myDateTime().substring(11));       //두번쨰 인수를 생략하면 끝까지 => undefined(끝까지)

// 공백제거 = trim
let space = '   Hello?     ';
// console.log(space.trim());
console.log(space.trim(), ':', space.trimStart(), ':', space.trimEnd());

//Method chain
console.log(space.trim().substring(0,5).toUpperCase());

