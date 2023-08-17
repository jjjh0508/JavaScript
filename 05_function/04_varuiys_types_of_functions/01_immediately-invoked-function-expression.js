

//익명함수는 바로 실행되기 때문에 호이스팅 되지 않는다.
(function (){
    console.log("익명 즉시 실행 함수! 함수 정의와 동시에 호출");
})();

(function(){
    console.log("졸리다");
})



(function test(name){
    console.log("기명 즉시 실행 함수");
    console.log(`${name}님 안녕하세요`);
})("홍길동");

//재실행 되지 않는다.
// test("길동");
