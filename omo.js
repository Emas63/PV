const cars=[{name:"Toyota",model:2020},{name:"Benz",model:2022},{name:"Bmw",model:2024},]
var jscars=[{
    //cars:{name:"Toyota",model:"2020",name:"Benz",model :"2022",name:"Bmw",model:"2024"},
}]
//document.write(cars[0].name)
//document.write(cars[0].model)

//document.write(cars[1].name)
//document.write(cars[1].model)

//document.write(cars[2].name)
//document.write(cars[2].model)


var text="<table>";
// text +=cars[0]+"<br>";
// text +=cars[1]+"<br>";
// text +=cars[2]+"<br>";

text +="<tr><th>Car Name </th><th>Car Model</th></tr>";
//for(let i=0; i<cars.length; i++){
   // text +="<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model + "</td>" + "</tr>";
    

    //document.write(text);
   // console.log(text);
//}
//text +="</table>";
//document.write(text)



let i =0
while(i < cars.length){
    text +="<tr><td>" + cars[i].name + "</td>" + "<td>" + cars[i].model + "</td>" + "</tr>";
    i++;
}
text +="</table>";
document.write(text)


