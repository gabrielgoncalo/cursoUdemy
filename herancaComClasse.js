class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + 'ja ligado');
            return;
        }
        this.ligado = true;

    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'esta desligado')
            return;
        }
        this.ligado = false
    }
}


class Smartphone extends DispositivoEletronico{
    constructor(cor, nome, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}


const tel1 = new Smartphone('preto', 'samsung', 'galaxy y');
tel1.ligar();
console.log(tel1);
tel1.desligar();
console.log(tel1);