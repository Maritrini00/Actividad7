const operacion =()=>{
    let a= document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let opcion =document.getElementById("opcion").value;
    if(opcion== 1){
        let resultado =parseInt(a)+parseInt(b);
        document.getElementById("resultado").innerHTML=resultado

    }
    if(opcion== 2){
        let resultado =parseInt(a) - parseInt(b);
        document.getElementById("resultado").innerHTML=resultado

    }
    if(opcion== 3){
        let resultado =parseInt(a) * parseInt(b);
        document.getElementById("resultado").innerHTML=resultado

    }
    
}