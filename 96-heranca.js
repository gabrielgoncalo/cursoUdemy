function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia;

}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;

}

Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.constructor = Camiseta;

const camiseta1 = new Camiseta("regata", 30, "azul");

console.log(camiseta1.nome);
console.log(camiseta1.cor); 
console.log(typeof(camiseta1.preco));