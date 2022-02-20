class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return 'prototype : ' + (this.first + this.second);
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }

    avg() {
        rturn (this.firs + this.second + this.third) / 3;
    }
}

var kim = new PersonPlus('kim', 10, 20);

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", lee.avg());
