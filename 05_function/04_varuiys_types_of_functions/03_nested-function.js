/* 중첩 함수
    함수 내부에 정의 된 함수를 충접 함수 또는 내부함수라고 한다.
    중첩 함수를 포함하는 함수는 외부 함수라고 한다.
    일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.


*/
// var outer = function(){
//     var outerVal;
 
//     var inner = function(){
//         var innerVal;
//         innerVal="내부함수";
//         console.log(outerVal,innerVal);
//     }
//     outerVal = "외부함수";
//     inner();
// }


function outer(){
    var outerVal = '외부 함수';
    
    function inner(){
        var innerVal = '내부함수';
        console.log(outerVal,innerVal);
    }
 
    inner();
}

outer();