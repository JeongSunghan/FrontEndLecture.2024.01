// 2. 디지털 시계, 00:00 ~ 23:59에서 하루동안 3이 표시되는 시간은 몇초인가?

let displayTime = 0;
for (let hour = 0; hour <= 23; hour++){
    for(let minute = 0; minute <= 59; minute++) {
        let clock = hour + ':' + minute
        if (clock.indexOf('3') >= 0)
        displayTime += 60;
    }
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`)


/* let displayTime = 0;            //변수 선언 및 초기화
for (let hour = 0; hour <= 23; hour++){     //반복문 :  변수가 23보다 작거나 같으면 증감
    for(let minute = 0; minute <= 59; minute++) {   // 반복문 : 변수가 59보다 작거나 같d으면 증감
        let clock = hour + ':' + minute         // 변수선언 : 클락 = hour + ':' + minute를 대입
        if (clock.indexOf('3') >= 0)    // 조건문 : 변수클락이. 3이라고 주어진 값이 0보다 크거나 같을때 
        displayTime += 60;              // 증감식 displaytime = displaytime + 60;
    }   
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`)    //출력
 */

// 2. 두개의 세자리수르 ㄹ곱해서 나온 결과가 palindrome일 떄
// 가장 큰 palindrome 수와 어떤수를 곱해서 나온 결과인가?
function isPalindrome(s) {
    return s == s.split('').reverse().join('');
}
let maxPal = 0, max1 = 0, max2 = 0;
    for (let i = 100; i<= 999; i++) {
        for (let k = i; k <= 999; k++){
            let mul = i * k;
            if (isPalindrome(String(mul)))  {
                if (mul > maxPal){
                    maxPal = mul; max1 = i; max2 = k;
                }
            }
        }
    }
console.log(`${max1} x ${max2} x ${maxPal}`);
