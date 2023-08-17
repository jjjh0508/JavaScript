const user = {
    activate : true
};

//Object의 프로토 타입을 이용하여 user를 만듬
const student = Object.create(user);

console.log(student.activate);

//Object.getPrototypeOf(obj) - obj의 [[prototype]]을 반환
console.log(Object.getPrototypeOf(student)==user);

//student의 Prototype를 user => {}로 변경
Object.setPrototypeOf(student,{});
console.log(Object.getPrototypeOf(student)===user);

const obj = {};

let key = "__proto__";
// obj.__proto__
obj[key] = '값 설정';
console.log(obj[key]);
//객체만 들어갈 수 있음

obj[key] = {test : "새로운 객체 덮어쓰기"};
console.log(obj[key]);