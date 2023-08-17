/* 함수 표현식 
    자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체를 일급 객체라고 한다.
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.

    일급 객체란 자바에서는 람다로 지원
    1. 모든 일급 객체는 변수나 데이터에 담을 수 있어야한다.
        public static void hello(){}

        Object a = hello 메서드를 변수에 할당 불가능

        const hello = function(){} 할당 가능
        
    2. 모든 일급 객체는 함수의 파라미터로 전달할 수 있어야한다.
    3. 모든 일급 객체는 함수의 리턴값으로 사용 할 수 있어야한다.
    
*/

var hello =  function(name){
    return `${name}님 환영합니다.`;
}



console.log(hello);
console.log(hello("길동"));


var calc = function add(a,b){
    return a+b;
}

console.log(calc(1,2));   // 변수명으로 접근해야한다.
// console.log(calc.add(1,2));  실행안된다.
// console.log(add(1,2));