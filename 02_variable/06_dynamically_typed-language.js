/*
    정적 타입(static/strong type) 언어 (c, c++, java,ktlin)
    변수를 선언할 때 데이터 타입을 사전에 선언(명시적 타입 선언)해야 한다.
    변수의 타입을 변경 할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당 할 수 있다.
    컴파일 시점에 타입 체크를 수행하는데 타입의 일관성을 강제하여 런타임 에러를 줄인다.

    동적타입(dynamic/weak type)언어 (javascript , python)
    자바스크립트는 var, let ,const 키워드를 사용해 변수를 선언할 뿐
    데이터 타입을 사전에 선언하지 않는다.
    즉, 동적 타입 언어는 변수 선언이 아닌 할당에 의해 타입이 결정(타입 추론)되며
    재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
    변수의 값이 언제든지 변경 될 수 있기 때문에 값을 확인하기 전에는 타입을 확신 할 수 없다.
    개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입 자동으로 변환되기도 한다.
    즉, 유연성은 높지만 신뢰성이 떨어진다.
    이로 인해 변수를 사용하기 전 데이터 타입 체크를 하기도 하는데 이는 번거롭기도 하고
    코드의 양도 증가한다.

    이러한 문제는 향후 개발의 유지보수성을 낮추는 경향이 있으며 디버깅 또한 쉽지 않다.
    이를 해결하고자 요즘 typeScript 라는 자바 스크립트에 타입을 추가해서 사용을 하고 있다.
    문법상의 큰차이는 없으니 시간이 되면 공부를 하는게 좋다.
*/

var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test ='javascript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test);


test = Symbol();
console.log(typeof test);


test = {};
console.log(typeof test);

test =[];
console.log(typeof test);

test = function(){};
console.log(typeof test);

/*
    동적 타입의 언어의 단점을 보완하기 위해서 변수 사용시 유의할 점
    1. 변수는 꼭 필요한 경우에 한해 제한적으로 사용
    2. 변수의 유효범위(스코프)를 최대한 좁게 만듬
    3. 전역변수의 지양
    4. 변수보다 상수를 사용해 값의 변경 억제
    5. 변수명을 통해 변수의 목적이나 의미를 파악할 수 있도록 함
*/