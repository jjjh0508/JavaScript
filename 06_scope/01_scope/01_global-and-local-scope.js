/** 전역과 지역 스코프
 *  전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
 * 전역에 변수를 선언하면 전역스코프를 갖는 전역변수가 되며 전역변수는 어디서든지 참조 할 수 있다.
 * 지역이란 함수 몸체 내부를 말하면 지역은 지역스코프를 만든다.
 * 지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프 와 
 * 하위 지역 스코프에서 유효하다.
 */

//전역변수
var x = 'global x';
var y = 'global y';


function outer(){
    console.log(x);

    //outer의 지역변수
    var z = "outer 's local z ";
    console.log(y);
    console.log(z);

    console.log("---------");
    function inner(){
        //inner의 지역변수
         var x = "inner's local x"; 
        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log("outer의 x"+x);
    inner();
}


outer();

console.log(x);