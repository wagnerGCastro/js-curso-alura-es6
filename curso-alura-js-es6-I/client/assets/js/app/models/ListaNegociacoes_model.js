/**
 * ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply
 *	
 *	function sum(a, b) {
 * 		return a + b;
 *	}
 * 
 *  obs: Function.prototype.apply.call(sum, undefined, [1.75,2]); 
 *  	 é igual Reflect.apply(sum, undefined,[1.75,2])
 *
 * Function.prototype.apply.call(sum, undefined, [1.75,2])
 * Feature: Chrome	Firefox Internet Explorer	Opera	Safari
 * support	 (Yes)	(Yes)	(Yes)	            (Yes)	(Yes)
 *
 * Reflect.apply(sum, undefined,[1.75,2])
 * Feature			Chrome	Firefox (Gecko)	Internet Explorer	Opera			Safari
 * Basic support	49		42 				Não suportado	 	Não suportado	Não suportado
 * 
 * 
 */

class ListaNegociacoes_model {
	constructor(contexto, armadilha) {
		this._negociacoes = [];
		this._contexto = contexto;
		this._armadilha = armadilha;
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
		Reflect.apply(this._armadilha, this._contexto, [this])
	}

	esvazia() {
		this._negociacoes = [];
		this._armadilha(this)
	}

	get negociacoes() {
		return [].concat(this._negociacoes);
		//Reflect.apply(this._armadilha, this._contexto, [this])
		Function.prototype.apply.call(this._armadilha, this._contexto, [this]);
	}

}