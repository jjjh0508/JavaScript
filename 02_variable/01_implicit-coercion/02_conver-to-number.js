console.log("------숫자형 타입으로 변환 ---------");

//산술 연산의 피연산자는 모두 숫자여야하므로
//숫자가 아닌 피 연산자를 숫자타입으로 암묵적으로 변환한다.

console.log(typeof (10-'5'));
console.log(10*'5');
console.log(10/'5');
console.log(10 % '5');
console.log(10 % 'java');


//비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이야 하므로
//숫자가 아닌 피연자를 숫자 타입으로 암묵적으로 변환한다.

console.log(10>'5');
console.log('============')
//단항 연산자는 피 연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적으로 타입 변환을 수행
console.log(+''); // 0
console.log(+'1');//1
console.log(+'javascript'); //NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); //0
console.log(+undefined); //NaN
// console.log(+Symbol());
console.log(+{});//NaN
console.log(+[]);//0
console.log(+function(){});//NaN


test ='1';
test2= '2';
console.log(test-(+test2));