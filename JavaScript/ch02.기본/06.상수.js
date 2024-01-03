//상수(Constant)
// 상수는 값이 변경이 안됨.
const a = 'Hello';
console.log(a);
// a += 'World';            //실행 시, runtime error 발생

const obj = {x: 1, y: 2};
// obj = {x :1, y:2 ,z:3};          << //error 발생

// 상수의 값이 바뀌는 경우
obj.x = 10;     //obj가 참조형 변수라서 가능
obj.y= 20;      
console.log(obj);