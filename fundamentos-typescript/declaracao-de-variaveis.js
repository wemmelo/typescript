// var, let e const
//var, pode ser acessada mesmo fora do escopo da function por conta do hosting do js
function iniciarTime(iniciaJogo) {
    var nome = "Messi e amigos";
    if (iniciaJogo) {
        var cidade = "em Uberlandia";
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime(false);
//let, só pode ser acessada dentro do escopo da 
function iniciarTimeL(iniciaJogo) {
    var nome = "Messi e amigos";
    var cidade;
    if (iniciaJogo) { //o let só deixa que essa variavél cidade seja enxergada dentro do if, por isso o erro
        cidade = "em Uberlandia"; //se eu quiser que esse código compile eu tenho que declarar cidade abaixo de nome
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTimeL(false);
//const, é um let e que não pode ser alterada
function iniciarTimeC(iniciaJogo) {
    var nome = "Messi e amigos";
    if (iniciaJogo) {
        var cidade = "em Uberlandia";
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTimeC(false);
