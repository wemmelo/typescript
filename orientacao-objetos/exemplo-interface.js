//as interfaces servem para você definir um contrato
//essa função recebe esse objeto e ele precisa seguir este contrato
//ou seja, se o objeto não tiver o atributo idade o código não compila
function imprimirIdade(pessoa) {
    console.log(pessoa.idade);
}
var joaoMarcos = { nome: "João Marcos", idade: 22 };
imprimirIdade(joaoMarcos);
