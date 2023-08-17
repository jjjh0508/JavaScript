//일반함수와 차이점

function Student(name ,age){
    //일반 메서드 내부의 this는 global를 바라보게 된다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return`${this.name}은 ${this.age}세 입니다.`;
    }
}
/**
 *  일반 함수와 생성자 함수의 특별한 형식적인 차이는 없다
 * (첫 문자를 대문자로 기술하여 구별할려고 노력함)
 * new 연산자와 함께 호출하면 생성자 함수로 동작하는 것이다.
 * 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.
 * 
 * 
 */
const student =   Student("강감찬",35);
console.log(student);
console.log(age);
console.log(global);



function Dog(name,age){
    console.log(new.target); //나를 가르켜라 new 연산자를 안쓰면 undefined
    if(!new.target){
            //재귀 함수
        return new Dog(name,age);
    }
    console.log(this);
    this.name=name;
    this.age =age;
};

const dog =  new Dog("뽀삐",30);
console.log(dog);