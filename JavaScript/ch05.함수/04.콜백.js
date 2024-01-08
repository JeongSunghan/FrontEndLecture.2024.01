// Call back 함수
// 함수안에 파라메타(매개변수,인수)로 함수로 넣어준다.
function callFiveTimes(callback) {
    for (let i = 0; i < 5; i++)
    callback();
}

// 익명함수 선언
const cb = function(){
    console.log(`함수가 호출되었습니다.`);
}

callFiveTimes(cb);

// 함수를 호출할 때익명 함수를 만들어 주는 것이 일반적
callFiveTimes(function(){
    console.log(`함수가 호출되었습니다.`)
});


// 익명 함수로 화살표 함수를 사용하는 것이 더 보편적
callFiveTimes(() => {
    console.log(`함수가 호출되었습니다.`);
});

/* ex) function a(x, y, cb) {
    x, y를 가지고 작업을 진행
    그리고 진행하다가
    cb(); callback로 끝
}


*/
