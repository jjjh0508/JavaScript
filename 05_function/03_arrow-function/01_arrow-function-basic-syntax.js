/*
    ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한
    방법으로 함수를 선언할 수 있다. . 화살표 함수는 항상 익명으로 정의한다.
*/

var message;

message = function(){
    return "hello world";
}


console.log(message());


message = () => {
    return "Aoorw function";
}

console.log(message());


message = () => "hello";

console.log(message());


//화살표 함수는 자신을 this로 가지지 않는다. 부모로 갖는다
message =(var1,var2) => `Arrow:${var1+var2}`;

console.log(message(1,2));