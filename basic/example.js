let p1 = {
    name: "小張",
    age: 28
};

let p2 = {
    name: "小王",
    age: 25
};

function Person(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.greeting = function () {
        console.log(`HI, 我式 ${this.name}`);
    };
    return obj;
}

let p1 = createPerson("小張", 28);
let p1 = createPerson("小王", 25);
//=====
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
        console.log(`HI, 我式 ${this.name}`);
    };
}

let p1 = new Person("小張", 28);
let p1 = new Person("小王", 25);

//底層
let p1 = {};
p1._proto_= Person.prototype;
Person.call(p1);