
const num = new Number(123);


console.log(num.__proto__ === Number.prototype);
// num.proto === Number.protype === object.protorype
                 //Numer    Object
console.log(num.__proto__.__proto__===Object.prototype);

// null 체인 맨위에 있다.
console.log(num.__proto__.__proto__.__proto__);

// . 참조를 하는 경우 가장 가까운 proto를 참조하게 된다.
console.log(num);
console.log(num.toString());
// num.toString , Number.toString, Object.toString

// console.log(num.__proto__.toString());

String.prototype.hello = function(){
    console.log(`hello, ${this}`);
}
/*문자열과 숫자 , 불린처럼 원시 타입 값의 프로퍼티에 접근하려고 하면
내장 생성자 String,  Number, boolean을 사용하는 임시 래퍼(wrapper)객체가 생성되고
임시 래퍼 객체는 메서드를 제공하고 난 후에 사라진다.
undefined , null에 대응하는 래퍼 객체는 없다
*/
"javascript".hello();

const obj = {
    0: "hello",
    1: "javascript",
    length:2
}

obj.join = Array.prototype.join;
console.log(obj.join(","));

console.log(obj);

//내장 프로토 타입 변경은 되도록 하지 않아야한다.
// 내장 프로토 타입은 새로 명세서에 등록된 기능을 사용하고 싶은데
//자바스크립트 엔진에 이 기능이 구현 되어있지 않을 때만 변경하는것이 좋다.
