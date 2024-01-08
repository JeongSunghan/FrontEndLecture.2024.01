/* //연습
// 1. 1에서 1000사이에 0은 몇번 1은 몇번, ..., 9는 몇번사용되었는가?
//  1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16

let numStr = '';
for (let i = 1; i <=1000; i++) {
    numStr += i;
}



//1.정규 표현식 활용
// 1이 몇번 사용 되었는가?
// /[023456789]/g,(02~9까지 공백) '' or /^1/g, '' (1이 아닌 모든 수를 공백)
console.log(numStr.replace(/^1/g, '').length);

for (let i = 0; i<=9; i++) {
    let pattern = new RegExp('[^' + i + ']', 'g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i} : ${count}`);
}

// 2. count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr); */

// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가
let count = 0;

for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        const hourStr = hour < 10 ? '0' + hour : String(hour);
        const minuteStr = minute < 10 ? '0' + minute : String(minute);

        if (hourStr.indexOf('3') !== -1 || minuteStr.indexOf('3') !== -1) {
            count += 60; 
        }
    }
}
console.log(`${count}초`);

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일 때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function palinDrome(num) {
    const strNum = String(num);
    return strNum === strNum.split('').reverse().join('');
}

let maxPalindrome = 0;
let num1, num2;

for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        const product = i * j;
        if (palinDrome(product) && product > maxPalindrome) {
            maxPalindrome = product;
            num1 = i;
            num2 = j;
        }
    }
}
console.log('가장 큰 수는', maxPalindrome,',','곱해서 나온 값은', num1,',',num2);


// 4. C:Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
//에서 파일명(04.String연습.js)만 출력하세요.
const filePath = 'C:Workspace/WebProject/JavaScript/ch07.표준내장객체/04.String연습.js';
const fileName = filePath.split('/').pop();

console.log(fileName);