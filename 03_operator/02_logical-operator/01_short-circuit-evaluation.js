/*
    logical-operator (논리연산자)
    ||(or) , && (and) , !(NOT)의 논리연ㅅ나자는 피연산자를 논리 연산한다.

    */

    /*
        01_short-circuit evalution(단축평가)
        표현식을 평가하는 도중 평가 결과가 확정 된 경우 평가 과정을 생갹하는것
    */

//OR AND 연산자 표현식의 결과는 떄로는 불리언 값이 아닐수도 있다.
//OR 의 경우 'apple' 이미 Truthy 값이여서 true로 평가되고
//논리 연산의 결과를 결정짓는 첫번째 피연산자 apple을 그대로 반환한다.

console.log('apple'|| 'banana');
console.log(false || 'banana');
console.log('apple' || false);

//AND의 경우 좌항, 우항 모두 확인해야 하므로
//논리 연산의 결과를 결정하는 두 번째 피연산자 banana를 그대로 반환한다.
console.log("==========================");
console.log('apple'&& 'banana');
console.log(false && 'banana');
console.log('apple' && false);

//단축 평가를 사용하면 if문을 대체할 수 있다.
var num = 1;
if(num %2 ==0){
    console.log("짝수입니다.");
    console.log("{}를 생략하는것도 가능하다");
}else{
    console.log("홀수입니다.");
}

if(num %2 ==0)
    console.log("짝수입니다.");
  
else
    console.log("홀수입니다.");




const test = ()=> { 
                    console.log("화살표");
                    console.log(2222222);
                    }
test();



num%2 ==0 && console.log("짝수입니다.");
num%2 ==0 || console.log("홀수 입니다.");


var obj = null;
// var val = obj.value;

var val = obj && obj.value; // 


console.log(val)