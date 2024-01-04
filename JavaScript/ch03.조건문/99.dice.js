let dice1 = Math.ceil(Math.random()*6);
let dice2 = Math.ceil(Math.random()*6);
let dice3 = Math.ceil(Math.random()*6);

let prize = 0;

if (dice1 == dice2 && dice2 == dice3){      //if (dice == dice2 == dic3) <-파이썬만 가능
    prize = 10000 * dice1 * 1000;
}else if (dice1 = dice2 || dice1 == dice3){
    prize = 1000 * dice1 * 100;

}else if (dice2 = dice3){
    prize = 1000 * dice2 * 100;

/* }else if (dice1 = dice3){
    prize = 1000 * dice1 * 100; */          //위에 ||(or)로 인해 지울 수 있음.

} else{
    let maxDice = dice1 > dice2 ? dice1 : dice2;
    maxDice = maxDice > dice3 ? maxDice : dice3;
    prize = maxDice * 100;
}
console.log(`${dice1}, ${dice2}, ${dice3} --> ${prize}원`);



/* let maxDice = Math.max(dice1, dice2 ,dice3);
pirze = maxDice * 100; */               //다른 예시

