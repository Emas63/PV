function validateinput(){
    let errortext = document.getElementById("error");
    try{
        const inputvalue=document.getElementById("userinput").value
        if(inputvalue=="")
            throw"input can not be empty";
        if (isNaN(inputvalue))
            throw "value must be a number";
        let b=Number(inputvalue);
        if(b<10)
            throw "Number must no be less than 10"

    }catch(error){
       // document.write(error)
        errortext.innerHTML=error;
        errortext.style.padding="2%";
        errortext.style.margin="2%";
        errortext.style.backgroundColor="red"
        errortext.style.color="white"
    }
}

function createData(){
    const title=document.getElementById("title").value
    const description=document.getElementById("description").value
    const userId=document.getElementById("userid").value
    try{
        let url = "https://jsonplaceholder.typicode.com/todos"
        const options = {
            method:"POST",
            headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
            },
            body:JSON.string({
                title: title,
                body: description,
                userId: userId
            })
            
        };
        fetch(url,options)
        .then((response)=>response.JSON())
        .then((data)=>{
            console.log(data)
        })  
    } catch(error){

    }
}