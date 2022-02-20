

let d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());



function Person(name, first, second, third) {
    this.name = name,
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }

}

console.log('person()', Person());  //함수를 호출하면 그냥 일반 함수
console.log('new Person()', new Person()); // new를 붙여서 생성하면 생성자 함수가된다. constructor

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('kim', 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
