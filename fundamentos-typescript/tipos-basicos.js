// boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = "Algaworks";
//templates strings
var nome = "joão";
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [8, 6, 7, 9];
//tuple
var alunos = ["João", 20, "matemática"];
console.log(alunos[0]);
console.log(alunos[1]);
//enum, é um novo tipo de dado que eu posso definir apenas essas cores.
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 0] = "verde";
    Cor[Cor["amarelo"] = 1] = "amarelo";
    Cor[Cor["azul"] = 2] = "azul";
    Cor[Cor["branco"] = 3] = "branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.verde;
//any, qualquer coisa, ou seja, não utilizar a tipagem estática do ts.
var algumValor = 4;
algumValor = "Agora é uma string";
algumValor = true;
//void, não aceita nada, contrário do any
function alerta() {
}
//null e undefined -> não faz muito sentido
var u = undefined;
var n = null;
//null e undefined são subtipos dos outros tipos
