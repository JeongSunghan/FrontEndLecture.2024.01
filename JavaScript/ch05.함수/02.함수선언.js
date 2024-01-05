// 선언적 함수
function add(a, b){         //a, b : 매개변수, parameter, argument
    return a + b;           //반환값
}
console.log(add(3, 4));
console.log(add(8, 9));

// add란 두개의 수를 매개의 변수로 받아서, 그 값을 결과를 돌려주는


// 익명(Anonymous) 함수
const anonymousSum = function (a, b) {
    return a + b;
}
console. log(anonymousSum(3, 4));
console. log(anonymousSum(8, 9));

// 화살표 함수, 람다 함수 -> 실전에서 가장 많이 사용
const arrowSum = (a, b) => a + b;           //매개변수가 하나이면 괄호가 없어도 됨.
console. log(arrowSum(3, 4));
console. log(arrowSum(8, 9));