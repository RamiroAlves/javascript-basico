let aluno = {
    nome: 'Anita',
    idade: 22,
    curso: 'Engenharia Civil',

    get getNome(){
        return this.nome;
    },

    set changeNome(novoNome){
        this.nome = novoNome;
    },

    get getIdade(){
        return this.idade;
    },

    set changeIdade(novaIdade){
        this.idade = novaIdade
    }
}

aluno.changeNome = 'Lara';
aluno.changeIdade = 25;

console.log(aluno.getNome);
console.log(aluno.getIdade);
