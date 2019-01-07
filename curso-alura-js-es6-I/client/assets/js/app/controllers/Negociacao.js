class Negociacao {

	constructor() {
		let $ 				  = document.querySelector.bind(document);
		this._inputData 	  = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor 	  = $('#valor');
		
	}

	adiciona(event) {
		event.preventDefault();

		// let data1 = new Date(this._inputData.value.split('-'));
		// let data2 = new Date(this._inputData.value.replace(/-/g, ','));
		// let data3 = new Date('2015,11,12');

		// operaddor spread 
		// let data4 = new Date(
		// 	...this._inputData.value
		// 		.split('-')
		// 		.map( 
		// 			function(item, indice) { 
		// 				// if (indice == 1) {
		// 				// 	return item - 1;
		// 				// }
		// 				// return item;

		// 				return item - indice % 2;
		// 			}
		// 		)
		// );

		// usnado Arrow Functions
		// let data = new Date(
		// 	...this._inputData.value
		// 		.split('-')
		// 		.map( (item, indice) => item - indice % 2 )
		// );

		// usand função local para tratar data
		//console.log(this.dateFormat(this._inputData.value));

		let negociacao = new Negociacao_model(
			this.dateFormat(this._inputData.value), this._inputQuantidade.value, this._inputValor.value
		);

		console.log(negociacao);
		//console.log(typeof( this._inputData.value));
		//console.log(data1,data2,data3,data4);
		//console.log(data);
		
		// console.log(this._inputData);
		// console.log(this._inputQuantidade);
		// console.log(this._inputValor);
	}


	dateFormat(data) {
		let dataFormatada = new Date(
			...data
				.split('-')
				.map( (item, indice) => item - indice % 2 )
		);

		return dataFormatada;
	}

}