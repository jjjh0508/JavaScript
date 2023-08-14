//기본적인 연산자의 사용은 자바와 다르지 않다.
// 자바스크립트에서 추가적으로 필요한 연산자와 관련한 내용을 학습해보자


/*
    01_comparison-operator(비교연산자)
    비교연산자는 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
    if문이나 for문과 같은 제어문의 조건식에 주로 사용한다.
*/

/*
    동등/일치 비교연산자
    동등비교 (loose equality) 연산자와 일치비교 (strict equlity) 연산자는 비교하는 엄격성 정도가 다르다
    동등은(== , !=) 연산자는 먼저 암묵적인 타입 변환을 통해 일치시킨 후 같은 값인지 비교한다.
    일치비겨(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

console.log(`1=='1': ${1=='1'}`);  // ;'1' =='1'
console.log(`1=='1': ${1==true}`); // 1 ==1
console.log(`1==='1': ${1==='1'}`); // 1==='1'
console.log(`1==='1': ${1===true}`);// 1===true



console.log("0000===00000");

console.log(`0=='0' : ${0=='0'}`);
console.log(`0=='' : ${0==''}`);
console.log(`0==false : ${0==false}`);
console.log(`0==='0' : ${0==='0'}`);
console.log(`0==='' : ${0===''}`);
console.log(`0===false : ${0===false}`);


// null , undefined 비교
console.log(`null == undefined  : ${null==undefined}`); // true
console.log(`null === undefined  : ${null===undefined}`); // false

//NaN은 자신과 일치하지 않는 유일 값이다.
console.log(`NaN== NaN ${NaN == NaN}`);
console.log(`NaN===NaN : ${NaN ===NaN}`);
var test = Number("!2asd23");
console.log(`Number.isNaN(NaN): ${Number.isNaN(test)}`);

console.log(`'hello'==='hello' : ${'hello'==='hello'}`);
console.log(`'hello'!=='hello' : ${'hello'!=='hello'}`);

//앞글자 아스키코드 기준 비교
console.log(`'apple'<'banana' :${'apple'<'banana'}`);
console.log(`'apple'>'banana' :${'apple'>'banana'}`);



console.log(`'cat'<='Zoo' :${'cat'<='Zoo'}`);
console.log(`'cat'>='Zoo' :${'cat'>='Zoo'}`);