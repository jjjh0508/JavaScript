/* 02_recursive- function(재귀함수) 
    함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
    재귀 호출을 수행하는 함수인 재귀함수는 반복되는 처리를 위해 사용한다.
*/

function factorial(n){
    if(n<=1) return 1;
    return n* factorial(n-1);
}
// 5 * 4 * 3 * 2 * 1

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

