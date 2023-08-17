/*
    1. 일반 함수의 this
    생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문에
    struce mode에서는 일반 함수로서 호출하면 this에 undefined가 바인딩 된다.

*/


(function(){
    'use strict'
    function test(){
        console.log(this);
    }
    test();
    new test();
}());


(function(x){
    // 'use strict'
   x = 2;
   console.log(arguments);
}(1));