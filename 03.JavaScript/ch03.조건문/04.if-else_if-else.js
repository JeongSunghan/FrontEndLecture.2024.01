// 점수에 따른 학점 구하기
// 90 ~ 100 : A
// 80 ~ 89 : B
// 70 ~ 79 : C
// 60 ~ 69 : D
//    ~ 59 : F

let score = Math.ceil(Math.random()*60) + 40;       //41 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if(score >= 80)
    grade = 'B';
else if(score >= 70)
    grade = 'C';
else if(score >= 60)
    grade = 'D';
else 
    grade = "F";

console.log(`점수: ${score}, ${grade}`);

// 5의 배수면 fizz 7의 배수면 buzz 5,7 공배수면 fizzbuzz, 아니면 숫자

if (score % 35 == 0)
    console.log('FizzBuzz');
else if (score % 7 == 0)
    console.log('Buzz');
else if (score % 5 == 0)
    console.log('Fizz');
else
    console.log(score);