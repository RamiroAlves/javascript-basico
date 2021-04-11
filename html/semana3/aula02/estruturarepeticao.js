let flag = true;
let contador = 0;


while(flag){
    if(contador<10){
        console.log("Trabalhando...");
        contador++;
        
        texto = "Trabalhando..."
        let resultado = document.createTextNode(texto+" ");
        painel.appendChild(resultado);

    } else{
        flag = false;
    }
}

for(let x = 0; x <= 20; x+=2){
    let resultado = document.createTextNode(x+" ");
    painel.appendChild(resultado);
}