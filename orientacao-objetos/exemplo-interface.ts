//as interfaces servem para você definir um contrato
//essa função recebe esse objeto e ele precisa seguir este contrato
//ou seja, se o objeto não tiver o atributo idade o código não compila

interface Pessoa{
    idade: number;
    sexo?: string; //com a interrogação o código compila mesmo sem ter esse atributo
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: "João Marcos", idade: 22};

imprimirIdade(joaoMarcos);


