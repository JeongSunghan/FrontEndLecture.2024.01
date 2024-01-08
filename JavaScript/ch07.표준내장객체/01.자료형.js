// 기본 자료형 - primitive type
let number = 273.14;  //숫자형 primitive type
let string = 'hello'
let boolean = true;  // or false;
console.log(typeof(number), typeof(string), typeof(boolean));





// 객체 자료형 - 기본 자료형을 객체로 만듦. Wrapper class라고도 함.
let numObj = new Number(273.14);
let strObj = new String('Hello');
let boolObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(boolObj));

// 그럼 넘버와 넘오브제는 같으냐?
console.log(number == numObj, number === numObj);
// 넘버와 넘오브제의 값은 같지만, 형태는 다르다.