class Negociacoes_view  extends Template_view {

	constructor(element) {
		super(element);
	}

	// loadTemplateNegociacoes(model) {
	// 	this._el.innerHTML = this._templateNegociacoes(model);
	// }

	template(model) {
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
										<td>${n.volume} </td>
									</tr>						
								`
							}
						) // .join('');  // não precisou usar join(); renderizar na view
					}
		        </tbody>
		        
		        <tfoot>
		        	<tr>
		        		<td colspan="3"> </td>
		        		<td>
							${ model.negociacoes.reduce( (total, n) => total + n.volume, 0.0) }
		        		</td>
		        	</tr>
		        </tfoot>
		    </table>
		`
	}

}

