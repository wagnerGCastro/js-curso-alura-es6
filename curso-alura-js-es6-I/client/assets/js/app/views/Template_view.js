class Template_view {

	constructor(element) {
		this._element = element;	
	}

	loadTemplate(model) {
		this._element.innerHTML = this.template(model);
	}

	template(model) {
		throw new Error('O método _template deve ser implementado');
	}

}