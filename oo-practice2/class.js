/**
 * Created by xiongshasha on 17-7-17.
 */
//"use strict";
class Person
{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
class Student {
    constructor(name,age,klass){
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old." + " I am a Student." + " I am at Class " + this.klass + ".";
    }
}
//module.exports = Student;
var person = new Person("Tom",21);
var student=new Student("Tom",21,2);
console.log(person.introduce()+'\n'+student.introduce()+'\n');