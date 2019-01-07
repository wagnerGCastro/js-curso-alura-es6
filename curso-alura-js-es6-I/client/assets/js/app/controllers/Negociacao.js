class Negociacao {

	constructor() {
		let $ 				  = document.querySelector.bind(document);
		this._inputData 	  = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor 	  = $('#valor');
		
	}

	adiciona(event) {
		event.preventDefault();

		// forma direta		
		// let data = new DateHelper().textoParaData(this._inputData.value);

		let helper = new DateHelper();

		//console.log(helper.textoParaData(this._inputData.value));

		let negociacao = new Negociacao_model(
			helper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value
		);

		console.log(negociacao);

		let diaMesAno =  helper.dataParaTexto(this._inputData.value);
		console.log(diaMesAno);

	}


	dateFormatToDate(data) {
		let dataFormatada = new Date(
			...data
				.split('-')
				.map( (item, indice) => item - indice % 2 )
		);

		return dataFormatada;
	}

	dateFormatToString(data) {
		let diaMesAno = data.getDate()
		    + '/' + (data.getMonth() + 1)
		    + '/' + data.getFullYear();

		return diaMesAno;
	}

}