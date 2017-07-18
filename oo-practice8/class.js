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
class Class
{
    constructor(number)
    {
        this.number = number;
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
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
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
    introduceWith(student){
        if(student.klass.number!=this.klass)
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
        else
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
    }
}
var person = new Person("Tom",21);
var student1=new Student("Tom",21,new Class(2));
var student2=new Student("Jerry",15,new Class(2));
var student3=new Student("Jerry",15,new Class(1));
var teacher1=new Teacher("Tom",21);
var teacher2=new Teacher("Tom",21,2);
console.log(`${person.introduce()}\n
${student1.introduce()}\n
${teacher1.introduce()}\n${teacher2.introduce()}\n
${teacher2.introduceWith(student2)}\n${teacher2.introduceWith(student3)}\n`);