// 숫자 변환 내장(built-in)함수

const a= '123.65', b = '0xff', c= '23';
console.log(Number(a), Number(b));

// 정수 - Integer, 실수 - Floating point
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(a), parseFloat(b), parseFloat(c));

console.log(parseInt('1401호'), Number('1401호'));
console.log(parseInt(`1,400원`), parseInt(`503동1401호`));