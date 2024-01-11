// for - 반복문
// 초기값을 미리 잘 세팅하자

// 1 ~ 1000까지 합 구하기
let sum = 0;
for(let i = 1; i<=1000; i++) {
    sum += i;
}
console.log(`1에서 1000까지 합은 ${sum}`);

// 1 ~ 1000까지 홀수 합 구하기
let oddsum = 0;
for(let i = 1; i<=1000; i+=2) {
    oddsum += i;
}
console.log(`1에서 1000까지 홀수합은 ${oddsum}`);

// 1~1000까지 짝수 합 구하기
let addsum = 0;
for(let i=0; i<=1000; i+=2) {
    addsum += i;
}
console.log(`1에서 1000까지 짝수합은 ${addsum}`);

// 1~10까지 곱구하기
let product = 1;
for(let i=1; i<=10; i++)
    product *= i
    console.log(`1에서 10까지의 곱은 ${product}`);

// array의 요소 출력
// element1, elemetn2, ...
let fruits = ['사과', '감', '귤', '배'];
let fruitStr = '';
for (let fruit of fruits) {
    fruitStr += fruit + ', ';
}
console.log(fruitStr);