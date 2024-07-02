class car{
    constructor(name,model,year){
        this.carName=name;
        this.carModel=model;
        this.ProductionYear=year;
    }
    age(a){
        return a-this.ProductionYear;
    }
}
const car1=new car("Toyota","Toyota 201",2016);
const car2=new car("Volvo","MMG",2022);

console.log(car1.carName)
console.log(car1.ProductionYear)
let d=new Date();
let curYear=d.getFullYear();
car1.age(curYear)
console.log(car1.age(curYear))



//concept of inheritance
class man{
    constructor(name,age,status){
        this.name=name;
        this.age=age;
        this.status=status;
    //constructor(parameter1, parameter2,...password)
        //construction method goes here
    }
    old(){
        return this.name +"is" + this.age +"old" + "and" + this.status 
    }
}
class woman extends man{
    constructor(name,age,status,address,phonenumber){
        super(name,age,status);
        this.name=name;
        this.age=age;
        this.status=status;
        this.address=address
        this.phonenumber=phonenumber
    }
}
let person1=new woman("Mary",24,"single","old cbn block","09015566781")
document.write(person1.old())