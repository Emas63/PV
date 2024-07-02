function converter(){
    const ngn=document.getElementById("niger");
    var dollar=document.getElementById("usa");
    var cur=document.getElementById("FX").value
    let a=Number(ngn.value);
    let b=Number(dollar.value);
    if((cur=="naira to dollar")&&(ngn.value !=null)){
        dollar.value=a/1450;
    }
    else if((cur=="dollar to naira")&&(dollar.value!=null)){
        ngn.value=b*1450;
    }
}
    // if( ngn !=null){
        // dollar.value=a*1450
    // }
