// Antes do ES6
function Person() {
    this.nome = '';
    this.idade = '';
}

let p1 = new Person();

p1.nome = 'Joana';
p1.idade = 29;

console.log(p1.nome);
console.log(p1.idade);


// Após o ES6
let aluno = {
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia Civil'
}

aluno.turno = 'manhã';

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);


// Desestruturação
let {nome, idade} = aluno;

console.log(nome);
console.log(idade);
console.log(aluno.turno);