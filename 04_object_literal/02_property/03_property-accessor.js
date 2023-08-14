// 03_property-accessor (프로퍼티 접근)


var dog ={
    name : '단비',
    eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`);
    }
}


console.log(dog.name);
dog.eat('상한 된장찌개');


console.log(dog["name"]);

dog['eat']('상한 계란');


var obj = {
    'dash-key' : 'dash-value',
    0:1
}


// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법 사용
console.log(obj["dash-key"]);