var dog ={
    name : '단비',

}

// dog.name = '두부';
dog['name']='두부';
console.log(dog);

//프로퍼티 동적추가
//존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고  프로퍼티 값이 할당된다.

dog.age = 3;
console.log(dog);

delete dog.age;
console.log(dog);


delete dog.something;
console.log(dog);