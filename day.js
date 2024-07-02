const date = new Date()
//alert(date)
//.getDay()
function greetings() {
    let d=date.getDay();
    if (d == 0){
        alert("Happy Monday")
    }
    if(d == 1 ){
        alert("Happy Tuesday")
    }
    if( d == 2){
        alert("Happy Wednessday")
    }
    if(d == 3){
        alert("Happy Thursday")
    }
    if(d == 4){
        alert("Happy Friday")
    }
}
//greetings()


function validateData(){
    const email=document.getElementById("email");
    const username =document.getElementById("Username");
    const password=document.getElementById("password");
    let emailValue = email.value
    let usernameValue=username.value
    let passwordValue=password.value
    //alert(emailValue+""+usernameValue+""+passwordValue)
    if(usernameValue.length <5){
        alert("usernameValue must contain atleast 5 chars!");
    }
    if(passwordValue.length <8){
        alert("password lenth is too small");
    }
    if(!email.includes(mustExit)){
        alert("email must include @");
    }
}

function changingValue(){
    alert("my value has changed")
}
const LGADATA= {
    Bayelsa:[" Brass", " Ekeremor", "Kolokuma/Opokuma", " Nembe","  Ogbia","  Sagbama","Southern Ijaw"," Yenagoa" ],
    Gombe:[ " Akko"," Balanga"," Billiri","Dukku"," Funakaye"," Gombe"," Kaltungo","Kwami","Nafada"," Shongom","Yamaltu/Deba"],
    Nassarawa:["Akwanga"," Awe","Doma"," Karu"," Keana","Keffi","Kokona","Lafia","Nasarawa","Nasarawa Egon"," Obi","Toto","Wamba"],
    Ebonyi:["Abakaliki" ,"Afikpo North"," Afikpo South","Ebonyi"," Ezza North"," Ezza South","Ikwo","Ishielu","Ivo","Izzi","Ohaozara","Ohaukwu","Onicha"],
    Ekiti:["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
};
function updateLGA(){
    const stateSelect = document.getElementById("states")
    const lgaSelect = document.getElementById("lgas")
    const selectedState = stateSelect.value;

    lgaSelect.innerHTML= '<option value=""> select local government</option>';

    if (selectedState){
        const lgas =LGADATA[selectedState];
        lgas.forEach(lga => {
            const option = document.createElement("option");
            option.value = lga;
            option.textContent = lga;
            lgaSelect.appendChild(option);
        });
        }
    }
