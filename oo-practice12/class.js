class Person
{
    constructor(id, name, age)
    {
        this.id = id;
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
        this.leader = student;
    }
    appendMember(student)
    {
        student.isAddTo = 1;
    }
    isIn(student)
    {
        if(student.klass === this)
            return true;
        else
            return false;
    }
}
class Student extends Person
{
    constructor(id,name,age,klass)
    {
        super(id,name,age);
        this.klass = klass;
        let isAddTo = 0;
    }
    introduce(){
        if(this.isAddTo !== 1 )
        {
            return `It is not one of us.`
        }
        else
        {
            if(this === this.klass.leader)
                return `${super.introduce()} I am a Student. I am a Leader of Class ${this.klass.number}.`;
            else
                return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }

    }
}
class Teacher extends Person
{
    constructor(id,name,age,classes)
    {
        super(id,name, age);
        this.classes = classes;
    }
    introduce(){
        let result,cla='';
        for(let i=0;i<this.classes.length;i++){
            if(i>0) cla+=',';
            cla+=this.classes[i].number;
        }
        if(this.classes.length === 0){
            result = `${super.introduce()} I am a Teacher. I teach No Class.`;
        }else {
            result = `${super.introduce()} I am a Teacher. I teach Class ${cla}.`
        }
        return result;
    }

    isTeaching(student){
        let result = false;
        for(let cla of this.classes){
            if(cla.isIn(student)){
                result = true;break;
            }
        }
        let str;
        if(result===true)
            str=`I am Tom. I know ${student.name} has joined class ${student.klass.number}`;
        if(result===true && )
        return str;
    }

}
let person = new Person(1,"Tom",21);

let klass1 = new Class(1);
let Tom = new Student(2,"Tom",21,klass1);
klass1.assignLeader(Tom);

let klass2 = new Class(2);
let Jerry = new Student(3,"Jerry",15,klass2);
klass2.appendMember(Jerry);

let klass3 = new Class(4)
let Ann = new Student(4,"Ann",15,klass3);
klass3.appendMember(Ann);
klass3.assignLeader(Ann);

let teacher1 = new Teacher(5,"Tom",21,[]);
let teacher2 = new Teacher(6,"Tom",21,[new Class(2)]);
let teacher3 = new Teacher(7,"Tom",21,[new Class(2),new Class(3)]);

let teacher = new Teacher(8,'Tom',21,[klass1,klass2]);
console.log(`${person.introduce()}\n
${Tom.introduce()}\n${Jerry.introduce()}\n${Ann.introduce()}\n
${teacher1.introduce()}\n${teacher2.introduce()}\n${teacher3.introduce()}\n
${teacher.isTeaching(Tom)}\n${teacher.isTeaching(Jerry)}\n${teacher.isTeaching(Ann)}\n`);