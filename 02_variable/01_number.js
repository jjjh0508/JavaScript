/*data-type은 값의 종류를 말하며 자바스크립트(es6)는 7개의 데이터 타입을 제공한다. */
/*
    01. 숫자 타입
    자바의 경우 정수와 실수로 구분해 int, long , float , double 등과 다양한 숫자 타입을 제공함
    하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.

*/

// 정수, 실수, 음수 모두 숫자 타입이다.
// 구글 -> 크롬엔진 v8 (자바스크립트) ->  v8엔진을 로컬에서 실행 가능하도록 만든것이  node
var integer =10;
//int integer =10;
var double = 5.5;
//double = 5.5
var negative = -1;
//int 변수명 = -1;

// 타입과 값이 모두 일치하는지 (일치 연산자)
console.log(10===10.0); 
 // 값이 일치하는 지 비교    자바스크립트는 오토세미클론 지원
console.log(10==10.0) 

console.log(10/4);
/*
    숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
    Infinity : 양의 무한대
    -Infinity : 음의 무한대
    NaN : 산술 연산 불가 (not-a-number)

*/
console.log(typeof integer);

integer = "문자열";
console.log(typeof integer);

console.log("-----------");
console.log(10/0);
console.log(10/-0);
console.log(10*'문자열');
console.log(typeof Number("123"));
console.log(2*"3");
console.log(2+"3");


