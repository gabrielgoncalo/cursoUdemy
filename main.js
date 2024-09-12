function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        
        inicia(){
            this.clickboton();
            this.pressionaButton();
        },

        pressionaButton(){
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Enter'){
                    e.preventDefault();
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                //A funcao eval le como se fosse um codigo javascript 
                //Portanto, pode ser ruim para segurança mas quebra o galho da calculadora por enquanto
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida');
                return;
            }

        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = '';
        },


        clickboton() {
            document.addEventListener('click', (e)=> {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.textContent);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }


            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };

}

const calculadora = criaCalculadora();

calculadora.inicia();

