console.log('=====논리 타입으로 변환 =====')


//자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy 값 (참으로 평가되는 값)
//또는 falsy(거짓으로 평가되는 값)으로 구분된다.
// Truthy -> true , falsy -> false로 암묵적으로 변환된다.


if(true) console.log("if(true)");
if('javascript') console.log("if(javascript)");
if(1) console.log("if(1)");

if(false) console.log("if(fasle)");
if(undefined) console.log("if(undefind)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");




