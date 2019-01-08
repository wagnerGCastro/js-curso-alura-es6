class Negociacao {

	constructor() {
		let $ 				  	= document.querySelector.bind(document);
		this._inputData 	  	= $('#data');
		this._inputQuantidade 	= $('#quantidade');
		this._inputValor 	  	= $('#valor');

		this._listaNegociacoes 	= new ListaNegociacoes_model();
		this._negociacoesView   = new Negociacoes_view($('#negociacoes-view')); 
		this._mensagem 		    = new Mensagem();
		this._mensagemView  	= new Mensagem_view($('.mensagens')); 
	
		// load views
		this._negociacoesView.loadTemplate(this._listaNegociacoes);
		this._mensagemView.loadTemplate(this._mensagem);
		
	}

	adiciona(event) {
		event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.loadTemplate(this._listaNegociacoes);

		this._mensagem.texto ='Negociação adicionada com sucesso!'; 
		this._mensagemView.loadTemplate(this._mensagem);

		this._limpaFormulario();

		// console.log(this._listaNegociacoes.negociacoes);
		// console.warn(typeof(this._listaNegociacoes.negociacoes));
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