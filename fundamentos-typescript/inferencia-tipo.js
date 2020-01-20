//a inferencia é quando o próprio ts determina o tipo da variável mesmo sem você definir
var quantidade = 20;
// não é associavél a um tipo string
//quantidade = "wel";
var x = [1, 2, null]; //esse array passa a ser inferido como um array de numbers
//contextual typing
window.onmousedown = function (evento) {
    console.log(evento.button);
};
