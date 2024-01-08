// Number 객체
let numberFromLiteral = 273;        //273과 같은 것을 literal
// 데이터 타입을 날것으로 표시하면 이걸 우리가 리터럴이라고 한다.

let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());            //지수 형태로 표시해라 3.14592643589793e+0
console.log(pi.toFixed(5));                 //소수점 5자리까지 표시해라 3.14159
console.log(pi.toPrecision(3));            //유효숫자 3자리로 만들어라 3.14

// 표기 방법 중 참고로 알아두기
console.log(Number.MAX_VALUE, Number.MIN_VALUE);
// Max value 최댓값은 얼마?, Min value의 최솟값은 얼마?

console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);


console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
// -Infinity, Infinity
// 근데 위에 도움은 안되구요.. --> 에?

console.log(Math.pow(2,53) - 1);  //Number.MAX_SAFE_INTERGER
// 53bit를 쓴다.
// Number객체에서는 중요한게 없어요.. ->에2?