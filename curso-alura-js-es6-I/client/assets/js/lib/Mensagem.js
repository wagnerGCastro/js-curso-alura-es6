class Mensagem {

    constructor( texto = '') {
          this._texto =  texto;
    }


    get texto() {
         return this._texto;
    }
     

    set texto(texto) {
        this._texto = texto;
    }
}

//let msg = new Mensagem();
//console.log( msg.mensagem = ('mensagem de vboaas vindas') );