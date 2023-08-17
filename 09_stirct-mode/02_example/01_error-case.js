//암묵적 전역
(function(){
    "use strict"
    x = 10;
    console.log(x)
}/*()*/);

// 2.변수, 함수, 매개변수의 삭제
(function(){
    // "use strict"
    var x = 10;
    delete x;
    // console.log(x)
}());

//3. 매개변수 이름의 중복
(function(){
    // "use strict"
    function test(x,x){
        return x+x;
    }
    console.log(test(1,2));
}/*()*/);


// 04. with 문의 사용
(function(){
    // "use strict"
    const user = {
        test : 1
    }
    with(user){  // 있지만 없다고 생각하자
        console.log(test);
    }
}());