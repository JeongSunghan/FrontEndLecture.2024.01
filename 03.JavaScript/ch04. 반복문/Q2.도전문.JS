// 1. 완전수(Perfect Number)
// 자기 자신을 제외한 약수의 합과 자기자신 같은수
// 6 = 1 + 2 + 3
// 28 = 1 + 2 + 4 + 7 + 14
// 10000이하의 수중에서 완전수 4개를 찾으시오(6, 28, 496, 8128)
let result = [];
let sum = 0;
for (let i=1; i<10000; i++){ //체크해야할 수
    for (let k = 1; k < i; k++){ // 나누는 숫자
        if(i % k == 0){ // 약수인지 찾는거
            if (i==k) // 자기자신일 때 루프 벗어나기
                break;
            sum+=k; // 약수를 더하기
        }
    }
    if (sum == i) // 완전수 여부
        result.push(sum); // 결과에 완전수 추가
    sum = 0; // 약수 합 초기화
}
console.log(result);




// 2. a + b + c = 1000을 만족하는 피타고라스 수 (단, a < b < c)
let answer =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
        for(let c=1; c<1000; c++){
            re=a+b+c;
            if (re == 1000){ // 다 더한 값이 1000인 경우만 사용
                if(a*a + b*b == c*c && a < b){ // 피타고라스와 크기 비교
                    answer.push(a);
                    answer.push(b);
                    answer.push(c);
                }
            }
        }
    }
}
console.log(answer);

