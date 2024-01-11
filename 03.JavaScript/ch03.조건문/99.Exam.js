//알람시계
//random문으로 만들기

let H = Math.ceil(Math.random() * 24 - 1);
let M = Math.ceil(Math.random() * 60 - 1);

console.log(`${H} ${M}`);

if(M<45){
    M=60-45+M;
    H--;
}
else
    M-=45;

if(H==-1)
    H=23;

console.log(`${H} ${M}`);


//함수로 만들기
function timer(h, m) {
    let time, hour = 0, minute = 0;
    if (m - 45 < 0) {
      minute = 60 + (m - 45) 
      hour = h - 1

      if (hour == -1) { 
        hour = 23;
      }
    } else {
      minute = m - 45;
    }
    time = hour + ':' + minute
    return time;
  }
  console.log(timer(10, 10))
  console.log(timer(0, 30))
  console.log(timer(23, 40))

