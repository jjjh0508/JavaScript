/** 02_let
 * var  키워드의 단점을 보완하기 위해 es6에서는 새로운 변수 선언 키워드인 let, const 를 도입
 * 
 * 
 * 
 */

//같은 스코프 내의 변수 중복 선언 불가
let mes = "안녕";
// let mes = "중복 안된더ㅏ.";


// 02_ 블록 레벨 스코프 지원
let i = 0;
for(let i = 0; i<10 ;i++){}

console.log(i);

// console.log(y);
//호이스팅이 안되는것  처럼 동작한다
let y = "1";
if(true){
    console.log(y);
    // let y ="2";
}

let m;
console.log(m);