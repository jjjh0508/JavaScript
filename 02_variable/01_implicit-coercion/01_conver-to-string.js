/*
    개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입변환 (explicit coercion)라고 하며
    자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환 되는것을 암묵적 타입 변환(implicit coertcion)이라고 한다
    명시적 타입 변환은 코드에서 드러나지만 암묵적 변환은 드러나지 않으므로
    타입 변환된 결과를 예측할 수 있어야 오류를 방지 할 수 있다.
*/

//01_convert- to-string (문자열 타입으로 변환)

console.log("=====문자열 타입으로 변환 ======");

//문자열 연결 연산자로 동작
//문자열타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환
console.log(10+'20');

console.log(`10+20: ${10+20}`);

//문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과

console.log(1+ " ");
console.log(typeof (1-" "));
console.log(typeof (1+" "));
console.log(NaN+'');
console.log(true + '');
console.log(Infinity + '');
console.log(null+'');
console.log(undefined +'');
// console.log(Symbol() +''); 심벌은 유일한 속성이라 변환할 수 없다
console.log({}+'');
console.log([]+'');
console.log(function(){}+'');
