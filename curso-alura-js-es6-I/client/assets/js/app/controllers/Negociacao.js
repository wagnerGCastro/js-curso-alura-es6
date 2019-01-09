class Negociacao {

	/**
	 * [constructor ]
	 * @return {[empty]} 
	 */
	constructor() {
		let $ 				  	= document.querySelector.bind(document);
		this._inputData 	  	= $('#data');
		this._inputQuantidade 	= $('#quantidade');
		this._inputValor 	  	= $('#valor');

		this._listaNegociacoes 	= new ListaNegociacoes_model( 
			/**
			 * Obs: Faz a mesma coisa que: this._negociacoesView.loadTemplate(this._listaNegociacoes);
			 */
			this,   // this é a class Negociacao

			// esta função será executada, quando os métodos (adiciona,apagar) forem invocados;
 			function(model) { this._negociacoesView.loadTemplate(model) }
 		);
		this._negociacoesView   = new Negociacoes_view($('#negociacoes-view')); 
		this._mensagem 		    = new Mensagem();
		this._mensagemView  	= new Mensagem_view($('.mensagens')); 
	
		// load views
		this._negociacoesView.loadTemplate(this._listaNegociacoes);
		this._mensagemView.loadTemplate(this._mensagem);
		
	}

	/**
	 * adiciona: 
	 * @param  {[obj]} event [description]
	 * @return {[type]}      [description]
	 */
	adiciona(event) {
		event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = 'Negociação adicionada com sucesso!'; 
		this._mensagemView.loadTemplate(this._mensagem);

		this._limpaFormulario();
	}


	apagar() {
		this._listaNegociacoes.esvazia();
		this._mensagem.texto ='Lista de Negociação apagada com sucesso!'; 
		this._mensagemView.loadTemplate(this._mensagem);
	}

	_criaNegociacao() {
		return  new Negociacao_model(
			DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value
		);
	}

	_limpaFormulario() {
		this._inputData.value = 'dd/mm/aaaa';
		this._inputQuantidade.value = 0;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}

}