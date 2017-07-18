class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    introduce()
    {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
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
        return super.introduce() + " I am a Student." + " I am at Class " + this.klass + ".";
    }
}
class Worker extends Person
{
    introduce(){
        return super.introduce() + " I am a worker." + " I have a job." ;
    }
}
var person = new Person("Tom",21);
var student=new Student("Tom",21,2);
var worker=new Worker("Tom",21);
console.log(person.introduce()+'\n'+student.introduce()+'\n'+worker.introduce()+'\n');