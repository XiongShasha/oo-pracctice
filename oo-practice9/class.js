class Person
{
    constructor(id,name, age)
    {
        this.id=id;
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
    assignLeader(student)
    {
        this.leader=student;
    }
}
class Student extends Person
{
    constructor(id,name,age,klass)
    {
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this===this.klass.leader)
            return `${super.introduce()} I am a Student. I am a Leader of Class ${this.klass.number}.`;
        else
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
}
class Teacher extends Person
{
    constructor(id,name,age,klass)
    {
        super(id,name, age);
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
var person = new Person(1,"Tom",21);
let klass=new Class(2);
var Tom = new Student(2,"Tom",21,klass);
var Jerry = new Student(3,"Jerry",15,new Class(2));
var Ann = new Student(4,"Ann",15,new Class(1));
klass.assignLeader(Tom);
var teacher1 = new Teacher(5,"Tom",21);
var teacher2 = new Teacher(6,"Tom",21,2);
console.log(`${person.introduce()}\n
${Tom.introduce()}\n${Jerry.introduce()}\n
${teacher1.introduce()}\n${teacher2.introduce()}\n
${teacher2.introduceWith(Jerry)}\n${teacher2.introduceWith(Ann)}\n`);