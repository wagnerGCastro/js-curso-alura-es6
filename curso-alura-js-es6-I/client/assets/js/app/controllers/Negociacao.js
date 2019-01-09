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
			 *  usnado arrow function
			 *  Isto ocorre porque a arrow function não é apenas uma maneira sucinta de escrever uma função, 
			 *  ela também tem um característica peculiar: o escopo de this é léxico, em vez de ser dinâmico 
			 *  como a outra função. Isto significa que o this não mudará de acordo com o contexto. Da maneira 
			 *  como estruturamos o código, o this será NegociacaoController - esta condição será mantida 
			 *  independente do local em que chamemos a arrow function, porque ela está amarrada a um escopo imutável.
			 *
			 * Então, o this de uma arrow function é léxico, enquanto o this de uma função padrão é dinâmico. 
			 * Com esse ajuste, conseguimos deixar o nosso código mais sucinto.
			 */
 			model => this._negociacoesView.loadTemplate(model) 
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