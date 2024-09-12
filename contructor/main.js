function Calculadora(){
    this.display = document.querySelector('.display');
    this.capClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.delNum();
            if (el.classList.contains('btn-eq')) this.result();

        })
    };
    
    this.inicia = () => {
        this.capClick();
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.delNum = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.result = () => {
        try{
        const conta = eval(this.display.value);

        if(!conta){
            alert('conta invalida');
        }
        this.display.value = conta
        
        } catch(e){
            alert('conta invalida');
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();