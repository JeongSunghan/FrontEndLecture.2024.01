
// 3번 문제
    let inputPrices = "51900;83000;158000;367500;250000;59200;128500;1304000";
    let pricesArray = inputPrices.split(';');
    for (let i = 0; i<pricesArray.length; i++){
        pricesArray[i] = Number(pricesArray[i]);
        }
    pricesArray.sort((a, b) => b - a);
    document.getElementById('output').innerHTML = "내림차순 정렬된 가격: " + pricesArray.join(', ');


    

