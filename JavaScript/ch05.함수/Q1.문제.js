// q1. 배열에 대한 함수
// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (let i of arr){
        sum += i;
    }
    return sum;
}

// 2. 배열에서 최댓값을 찾기.
function maxArray(arr) {
    let maxsum = 0;
    for (let i of arr){
        if (i > maxsum)
            maxsum = i;
    }
    return maxsum;

}

let sampleArray = [43, 17, 25, 36, 98, 93];
console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));