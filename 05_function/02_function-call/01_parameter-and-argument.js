function hello(name){
    console.log(name);

    console.log(arguments);

    return `${name}님 안녕하세요`;
}

//자바: 인자의 개수, 타입
var result = hello("길동");
console.log(result);

result = hello();
console.log(result);

result = hello("홍길동","홍박사","어쩌고");
console.log(result);

//ES6 문법에서 지원되는 기본 매개변수 값을 이용하는 방법
function hi(name="아무개"){
    //기본 값을 이용하는 경우 arguments의 인자로 인식되지 않는다.
    console.log(arguments);
    // if(arguments.length!==1 || typeof name !== 'string' || name.length===0){
    //     throw new TypeError("인수는 1개 여야하고 문자열 값을 가져야하며 빈 문자는 허용하지 않습니다.");
    // }
    return `${name}님 안녕하세요.`;
};


// result=hi();
// console.log(result);

// result=hi("홍길동","홍박사");
// result=hi(1);
// result=hi("");
result=hi(" ");
console.log(result);

result=hi("홍길동");
console.log(result);