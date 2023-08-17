// 함수 호이스팅
console.log(hello);
console.log(hi);
// hi는 선언부만 끌어올림
//var hi; 호이스팅은 선언부를 끌어올린다.

console.log(hello("길동"));
// console.log(hi("길동"));

//함수를 선언
function hello(name){
    return `hello ${name}님 안녕하세요`;
}
//함수를 할당
/* 호이스팅하면서 선언부가 위로 올라가고 몸체는 이렇게 됨
 hi = function(name){
    return `hi ${name}님 안녕하세요`;
}
 */ // 함수 표현식은 호이스팅할떄 선언부만 올라간다
var hi = function(name){
    return `hi ${name}님 안녕하세요`;
}


console.log(hi("길동"));

