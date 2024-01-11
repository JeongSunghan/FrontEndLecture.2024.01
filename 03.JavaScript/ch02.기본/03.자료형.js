// 자바스크립트의 자료형
// 1. Number
console.log(5 + 2, 5-2, 5*2, 5/2);  //+, -, *, / 기본적인 사칙연산
console.log(5 % 2); // %(modulo) , 나머지 
console.log(2 ** 10); // 2의 제곱, 1024(1K), **(제곱)
console.log(1.3e-8);  //1.3 x 10 ** -8*() */

// 2. 문자열(string)
console.log('He said "I love you."');
console.log("I'll be back.");
console.log("He said \"I love you.\""); //escaping
console.log('back slash(\\) 기호를 사용할 때에는 \\ 두개를 사용');

let hello = '안녕하세요?';
console.log(hello[0], hello[2], hello[5]); //안 하 ? = hello의 0번쨰 2번쨰 5번째만 표기

// template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '는', 2+3, '입니다.');
console.log(`${a} 더하기 ${b}은 ${a+b} 입니다.`); //2더하기 3은 5입니다 라고 표기
console.log(`올해는 ${new Date().getFullYear()}년입니다.`) //올해는 2024년입니다 라고 표기


/* 
 변수 작명을 할 때, 그 의미가 명확하게 기제돼야함
 ex) fullyear를 예로 할때
        fullYear : camel case 
        fullYear : camel case --> Getter methood --> getFullYear
        full_year : snake case
    *실무에가서 a,b,c 요따구로 작성시 뒷통수 한대예약
 */


// 3.논리형(boolean) 별 다섯개!
console.log(typeof(true), typeof(false));
console.log(2 == 2.0, 5 >=4, !('가나다' > '마바사'));  //관계연산자

let x = 10;
console.log(x > 8 || x < -3); // 논리 연산자 ||(or), x> > 8 또는 x < -3
console.log(x > 8 && x < 12); // %%(and) : x가 8보다 크고 12보다 작은
console.log(ture > 10);