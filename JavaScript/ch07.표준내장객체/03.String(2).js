// 문자열 반환
const sample = 'A quick brown fox jumps over the lazy dog.';
console.log(sample.replace('A','a'));
console.log(sample.replace('o','O'));       //앞에 있는 것 한개만 바뀜

// 변환 할 떄 알아야 하는 것 - 정규 표현식

//정규 표현식 (딥 러닝을 이용한 자연어 처리 입문 > 02-05 정규 표현식 참조)
console.log(sample.replace(/o/g, 'O'));  //g=글로벌, 모든 o가 O로 바뀜
const str = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, '');       //영문자와 공백만 남기고 모두 지움 []=or
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ가-힣]/g,'');  //한글과 공백만 남기고 모두 지움
let num = str.replace(/[^0-9]/g, '');       //숫자만 남기고 모두 지움
let spe = str.replace(/[^-=]/g, '');         //-, == 특수기호 남기고 모두 지움
console.log(eng);
console.log(kor);
console.log(num);
console.log(spe);
