// [[prototype]]
// 숨겨서 추가?
const user = {
    activate : true,
    login : function(){
        console.log("로그인 완료");
    }
};

const student = {
    passion : true
};


student.__proto__ = user;

console.log(student.activate);
student.login();
console.log("=========");

//student의 프로토 타입은 user 객체이다
//student는 user 상속받는다. 이는 프로토타입 상속을 의미한다.


//greedyStudent의 프로토타입은 student이다.
//greedyStudent는 student 상속받으며 이를 프로토 타입 상속이라고 한다.
// 상속은 다음과 같이 이루어진다.
//greedyStudent -> student -> user
const greedyStudent = {
    class : 11,
    __proto__ : student
};
console.log(greedyStudent.class); 
console.log(greedyStudent.activate); // user에서 정의됨
console.log(greedyStudent.passion); // student에 정의됨
greedyStudent.login();



/*
    프로토타입 체이닝은 순환 참조가 허용되지 않는다.
    __proto__ 의 값은 객체 또는 null만 가능하며 다른 자료형은 무시된다.
*/