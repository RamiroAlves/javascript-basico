let lista = ['frango', 'carne', 'peixe', 'maçã', 'aveia', 'laranja', 'melancia'];

lista.forEach(minhaFuncao);

function minhaFuncao(item){
  console.log(item);
}

function modificaLista(...vogais){
  console.log(vogais);
}

modificaLista('a', 'e', 'i', 'o', 'u')

let comidas = [...lista, 'suco', 'uva'];

console.log(comidas);

let numeros = [3,4,5,6,7];

let copia = numeros.map(item=>item*2);

console.log(copia);
