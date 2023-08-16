function hello(name){
    return `${name}님 안녕하세요`;
    //리턴문 뒤에는 동작되지 않는다.
    //함수의 종단점은 return이다 이로 인해 return 이후의 구문은 실행되지 않는다.

    console.log("asdasd")
}



console.log(hello("단비"));



function cal(a,b){
    console.log(a+b);
    return ;
}


console.log(cal(1,2));