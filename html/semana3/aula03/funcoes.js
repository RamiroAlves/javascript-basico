const painel = document.getElementById("painel");

let texto = '';

let numero1 = 30, numero2 = 10;

// função com parâmetros e com retorno
function soma(variavel1, variavel2){
    return variavel1 + variavel2;
}

// função sem parâmetros e com retorno
function endereco(){
    return "Av. Beira Mar 212";
}

// função sem parâmetros e sem retorno
function olaMundo(){
    console.log("Olá mundo!");
}

olaMundo();

texto = endereco();

//texto = soma(numero1, numero2);

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);