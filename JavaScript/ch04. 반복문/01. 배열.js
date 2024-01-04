/* 1. 배열(Array) 
    ; 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형
    ; 대괄호 내부의 각 자료는 쉼표로 구분
    ; 배열에는 여러 자료형이 섞여 있을 수 있음
    ; 요소 : 배열 안에 들어 있는 각 자료
    ex) let 이름 = [자료,자료,자료,자료]


*/

let person = ['James', 27, '남자', '프로그래머', 175.3];
console.log(person);
console.log(typeof person);         //object, array는 object의 한 형태
console.log(person.length);         //배열의 길이를 나타냄
console.log(person[0], person[1], person[person.length-1]);        

// obj = {key1 : value1, key2: value2}
// arr = {0: vall, 1: val2, ...} ==> [val1, val2, ...]


// 배열을 효율적으로 사용하려면 반복문을 사용
// while 반복문 - 갯수가 정해지지 않은 경우
// for 반복문 - 갯수가 정해져 있을 경우

for(let i=0; i < person.length; i++) {          //시작값; 조건이 참인 동안 반복, 다음번 반복시 변화시킬 값
    console.log(person[i]);
for (let i=person.length-1; i >=0; i--) {
    console.log(person[i]);
}    
}


//  Enhanced for-loop
console.log('Enhanced for-loop')
for (let item of person)
console.log(item);