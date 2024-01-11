//백준도장 BOJ 2023, 31090 문제

function isDivisible(year) {
    let num = year % 100;      
    if((year + 1) % num == 0)
        return 'good';
    return 'bad';       //return이 왜 2개가 들어가는지?, 리턴개념 공부 하기
}

for (let year = 2023; year < 2040; year++){
    console.log(`${year} : ${isDivisible(year)}`);
}
