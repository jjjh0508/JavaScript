/* 01_ var

    ES5 까지 변수를 선언할 수 있는 유일한 방법은 var을 이용하는 것이였으나 다음과 같은
    몇가지 문제를 야기한다.
*/

var message ="안녕하세요";

console.log(message);
var message = "중복 선언에도 문제가 없다.";
console.log(message);
var message;
console.log(message);


//해석 다 위로 올리고(호이스팅)
// var message;
// var message;
// var message;


//  message ="안녕하세요";

// console.log(message);
//  message = "중복 선언에도 문제가 없다.";
// console.log(message);

// console.log(message);

//02_ 함수 레벨 스코프
var i = 0;
for(var i = 0; i<10 ;i++){}

console.log(i); // 10\


console.log(test); //undefined
test = "반가워요";
console.log(test); // 반가워요
var test;