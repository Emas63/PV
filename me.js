// function sumnubers(a,b,c){
    // const d=a+b+c;
    // document.write(d)
// }
// sumnubers(5,7,9);

// function trial(){
    // var a=10
    // let b=a--
    // console.log(a,b)
// }
// trial()


// function pratice(){
    // const a=5;
    // const b=5;
    // const c=3;
    // if((a==b)||(b==c)){
        // alert(true);
    // }
// }
//pratice()

//function ans(){
    // const a=5;
    // const b=5;
    // const c=3;
    // if((a==b)&&(b==c)){
        // alert(true);
    // }
// }
// ans()


// var firstname="Emareyo"
// var lastname="oghenerunor"
// let fullname=firstname+" "+lastname;
// document.write(fullname);
// console.log(firstname.length);
// document.write(firstname.charCodeAt(5));


// var a=12
// var b="20"
// var c=a+b;
// document.write(c)



// var a=12
// var b=20
// var c="50"
// d=c.toString()
// sum=a+b+d
// document.write(sum)



// var text="<ul>"
// var states=["abuja","crossriver","abia","ebonyi","delta","rivers","kastina","kebbi","kano","imo",]
// const stateslen=states.length
//var a=0
//for(a;a<stateslen;a++){
    //    text += states[a]
  //  text += "<li>"+states[a] + "</li>"
    
//}
//text +="</ul>"
//document.write(text)


//var person={
  //  name:"mary",
    //height:"6m",
    //sex:"female",
    //weight:"78kg"
//}
//document.write(person.name)



var table="<table>"
table +="<tr>"
table +="<th>"
table +="property name";
table +="</th>"
table +="<th>"
table +="property value";
table +="</th>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="height"
table +="</td>"
table +="<td>"+ person.height+"</td>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="sex"
table +="</td>"
table +="<td>"+ person.sex+"</td>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="weight"
table +="</td>"
table +="<td>"+ person.weight+"</td>"
table +="</tr>"
table +="<tr>"
table +="<td>"
table +="name"
table +="</td>"
table +="<td>"+ person.name+"</td>"
table +="</tr>"

document.write(table)






var cars = [
{name:"toyota",model:"2019"},
{name:"lambo",model :"2024"},
{name:"volvo",model:"2020"}
]
document.write(cars[0].name)
document.write(cars[0].model)

document.write(cars[1].name)
document.write(cars[1].model)

document.write(cars[2].name)
document.write(cars[2].model)   




var jsobject=[{
    persons:{name:"mary",height:"6m",sex:"female",weight:"78kg"},
    cars:{name:"toyota",model:"2019",name:"lambo",model :"2024",name:"volvo",model:"2020"},
}]

document.write(jsobject[0].persons.name)
document.write(jsobject[0].persons.height)




var person={firstname:"emareyo",
    lastname:"runor",
    age:"10",
    fullname:function(){
        return this.firstname+""+lastname
    }
}

document.write(person.fullname());
document.write(person.firstname)











    

















// var states=["abuja","crossriver","abia","ebonyi","delta","rivers","kastina","kebbi","kano","imo",]
// states[6]="rivers";
// document.write(states[6]);


// states.toString()
// document.write(states)

// states[states.length-2]
// document.write(states)













