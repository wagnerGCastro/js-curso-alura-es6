class Negociacoes_view {

	constructor(el) {
		this._el = el;
	}

	loadTemplateNegociacoes(model) {
		this._el.innerHTML = this._templateNegociacoes(model);
	}

	_templateNegociacoes(model) {
		return `
			<table id="table-negociacoes" class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th>DATA</th>
		                <th>QUANTIDADE</th>
		                <th>VALOR</th>
		                <th>VOLUME</th>
		            </tr>
		        </thead>
		        
		        <tbody>
					${
						model.negociacoes.map(
							(n) => {
								//console.log(n);

								return `
									<tr>
										<td>${DateHelper.dataParaTexto(n._data)}</td>
										<td>${n._quantidade}</td>
										<td>${n._valor}</td>
										<td>${n._quantidade * n._valor} </td>
									</tr>						
								`
							}
						) // .join('');  // não precisou usar join(); renderizar na view
					}
		        </tbody>
		        
		        <tfoot>
		        </tfoot>
		    </table>
		`
	}

}

