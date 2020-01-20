class Cliente {

    nome: string;
    idade: number;
    
    //toda classe já vem com o seu construtor por padrão
    //vou declarar apenas para fins didáticos
    //um construtor pode ou não receber parametros
    constructor(nome: string, idade:number){ //quando eu coloco os parametros eu já posso iniciar as propriedades do meu objeto
        this.nome = nome;
        this.idade = idade;
    }

    //metódo
    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}

//criar um objeto do tipo Cliente
let joao: Cliente = new Cliente("João", 25);
let apresentacao:string = joao.apresentar();
console.log(apresentacao);

let maria: Cliente = new Cliente("Maria", 23);
console.log(maria.apresentar());