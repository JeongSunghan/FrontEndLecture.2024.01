/* 식별자(identifier)
            1. 영문자, 숫자, $, _(언더바) 
            2. 대/소문자 구분
            3. 숫자로 시작하면 안됨
            4. 예약어(Keyword) 사용금지
            5. 단어가 여러개 사용하는 것을 권장. - camel style로 한 단어를 만들 것
            6. 변수, 상수, 함수명 등은 소문자로 시작
            7. 클래스 명은 대문자로 시작 */

// 변수(Variable)
let pi = 3.1415926335;  //신식(let) 변수
var radius = 10;    //구식(var) 변수
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius} 입니다.`);

// 복합 대입 연산

let a = 1, str =''
a += 2; //a = a + 2
str += 'A quick brown fox';
str += 'jumps over the lazy dog.';
console.log(a, str);

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);  //post-increment, pre-increment
console.log(x, y);
console.log(x--, --y); //post-decrement, pre-decrement
console.log(x, y);


// -나머지 자료형
// 4. 함수(function)
console.log(typeof function(){}); // 
console.log(typeof(() => {}));  //화살표(arrow) 함수, 람다 함수, 익명 함수

// 5. 객체(object)
let obj = {x:1, y:2};
console.log(typeof obj);
console.log(obj.x, obj,y);

// 6. undefined
let alpha;
console.log(typeof alpha, typeof beta);
alpha = 123;
beta = 456;
console.log(typeof alpha, typeof beta);







