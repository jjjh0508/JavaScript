/* 함수 표현식 
    자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체를 일급 객체라고 한다.
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
*/

var hello =  function(name){
    return `${name}님 환영합니다.`;
}



console.log(hello);
console.log(hello("길동"));


var calc = function add(a,b){
    return a+b;
}

console.log(calc(1,2));
// console.log(calc.add(1,2));
// console.log(add(1,2));