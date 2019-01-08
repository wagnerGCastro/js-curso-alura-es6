class Negociacao {

	constructor() {
		let $ 				  	= document.querySelector.bind(document);
		this._inputData 	  	= $('#data');
		this._inputQuantidade 	= $('#quantidade');
		this._inputValor 	  	= $('#valor');
		this._listaNegociacoes 	= new ListaNegociacoes_model();
	}

	adiciona(event) {
		event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());

		this._limpaFormulario();

		// maneira de verifca se imutavel
		//this._listaNegociacoes.negociacoes.length = 0;
		//this._listaNegociacoes.negociacoes.push(this._criaNegociacao());



		console.log(this._listaNegociacoes.negociacoes);
	}

	_criaNegociacao() {
		return  new Negociacao_model(
			DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value
		);

	}

	_limpaFormulario() {
		this._inputData.value = 'dd-mm-aaaa';
		this._inputQuantidade.value = 0;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}

}