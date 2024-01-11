// 문자열 찾기
let hello = '안녕하세요?';
console.log(hello.indexOf('안녕'));     //결과값이 0 이상이면 찾는 문자열이 있음
let search = 'hello';
if (hello.indexOf('search') >= 0)
    console.log(`찾고싶은 단어 ${search} 이/가 문장안에 있습니다.`);
else 
    console.log(`찾고싶은 단어 ${search} 이/가 문장안에 없습니다.`);
