var Cliente = /** @class */ (function () {
    //toda classe já vem com o seu construtor por padrão
    //vou declarar apenas para fins didáticos
    //um construtor pode ou não receber parametros
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    //metódo
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
//criar um objeto do tipo Cliente
var joao = new Cliente("João", 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente("Maria", 23);
console.log(maria.apresentar());
