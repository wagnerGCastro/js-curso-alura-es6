class Mensagem_view extends Template_view  {

	constructor(element) {
		super(element);	
	}


	template(model) {
		return  model.texto  ? `<p class="alert alert-info">${model.texto}</p>` : '';
	}


}