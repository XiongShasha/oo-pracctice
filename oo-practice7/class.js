class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    introduce()
    {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Student extends Person
{
    constructor(name,age,klass)
    {
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
    }
}
class Teacher extends Person
{
    constructor(name,age,klass)
    {
        super(name, age);
        this.klass=klass;
    }
    introduce(){
        if(typeof this.klass === 'undefined')
            return `${super.introduce()} I am a Teacher. I have No Class.`;

        else
            return `${super.introduce()} I am a Teacher. I teacher Class ${this.klass}.`;
    }
}
var person = new Person("Tom",21);
var student=new Student("Tom",21,2);
var teacher1=new Teacher("Tom",21);
var teacher2=new Teacher("Tom",21,2);
console.log(`${person.introduce()}\n${student.introduce()}\n${teacher1.introduce()}\n${teacher2.introduce()}\n`);