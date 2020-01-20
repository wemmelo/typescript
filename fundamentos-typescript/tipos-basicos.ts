// boolean
let estaPago: boolean = true;

//number
let idade:number = 20;
let valor:number = 29.99;

//string
let empresa: string = "Algaworks";

//templates strings
let nome: string = "joão";
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = ["João", 20, "matemática"];
console.log(alunos[0]);
console.log(alunos[1]);

//enum, é um novo tipo de dado que eu posso definir apenas essas cores.
enum Cor {verde, amarelo, azul, branco};
let corFundo: Cor = Cor.verde;

//any, qualquer coisa, ou seja, não utilizar a tipagem estática do ts.
let algumValor: any = 4;
algumValor = "Agora é uma string";
algumValor = true;

//void, não aceita nada, contrário do any
function alerta(): void{

}

//null e undefined -> não faz muito sentido
let u: undefined = undefined;
let n: null = null;
//null e undefined são subtipos dos outros tipos