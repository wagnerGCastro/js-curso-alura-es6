class Templates_view {

	constructor(el) {
		this._el = el;	
	}

	loadTemplateMensagem(model) {
		this._el.innerHTML = this._mensagem(model);
	}

	_mensagem(model) {
		return  model.texto  ? `<p class="alert alert-info">${model.texto}</p>` : '';
	}
}