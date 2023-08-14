/*
    01_optional - chaining-operatior(옵셔널 체이닝 연산자)
    ES11(ECMAscript2020)에서 도입된 연산자로 좌항의피연산가자 null 또는 undefined인 경우
    undefined를 반환하고 그렇지 않으면 우항의 프로퍼티를 이어간다.
*/


var obj = null;

var val = obj?.value;
// var val1 = obj.value;
console.log(val);
// console.log(val1);

/*
    옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 단축평가로 확인했다.
    단 빈 문자열과 같은 falsy 값을 false로 취급해서 생기는 문제가 있다.
*/


var str ='';

var len = str?.length;
console.log(len);



// var obj={
//     "key" : '',
//     "value": ''
// }


// console.log(obj?.value);