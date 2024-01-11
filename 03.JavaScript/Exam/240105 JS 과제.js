/* 1. 만 나이를 계산하세요.생년, 월, 일을 변수로 설정해서 풀어보세요.(2000.03.11) */ 
function myAge(myYear, myMonth, myDay) {
   let date = new Date();

   let year = date.getFullYear();
   let month = date.getMonth() + 1; 
   let day = date.getDate();

   let age = year - myYear;
   if (month < myMonth || (month === month && day < myDay)) {
     age--;
   }
   return age;
 }
 
   let myYear = 2000;
   let myMonth = 3;
   let myDay = 11;
 
   const age = myAge(myYear, myMonth, myDay);
   console.log("만 나이:", age);


/* 2. 백준도장 31090 참조, 다음의 사례에 대해서 Good/Bye를 출력하세요.
      2023, 2024, ..., 2040
   단, 조건에 맞는를 확인해주는 함수 isDivisible(year)를 만들어서
   해결하세요. */

    function isDivisible(year) {
      let startYear = 2000;
      let nextYear = startYear + 1;
   
      let isDivisible = (nextYear % (year - startYear)) === 0;
      console.log(year - startYear, nextYear, isDivisible ? 'good' : 'bye');
    }
    for (let i = 2023; i < 2040; i++) 
    isDivisible(i);
  

/* 3. array를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
   [24, 67, 45, 97, 43] 의 결과를 출력하세요. */
function sumAdd(arr) {
   let sum = 0;
   let sumAdd = 0;
   for (let i = 0; i < arr.length; i++) {
     sum += arr[i];            
     sumAdd += arr[i] ** 2;  
   }
   let difference = sum ** 2 - sumAdd;
   return difference;
 }
 
 let Array = [24, 67, 45, 97, 43];
 let result = sumAdd(Array);
 console.log("결과:", result);
 
 