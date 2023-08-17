//생성자 함수
const student = {
    name: '유관순',
    age : 16,
    getInfo: function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}


const student2 = {
    name : '홍길동',
    age: 20,
    getInfo : function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }

}


function Student(name,age){
   this.name = name;
   this.age = age;
   this.getInfo = function(){
        return `${name}은 ${age}입니다.`;
   }
}


const student3 = new Student("장보고",26);
const student4 = new Student("신사임다",32);


console.log(student3.getInfo());
console.log(student4.getInfo());