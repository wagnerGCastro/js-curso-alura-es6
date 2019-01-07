var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tBody   = document.querySelector('#table-negociacoes tbody');
var form 	 = document.querySelector('.form');

//console.table(campos);
//console.info(tBody);

form.addEventListener('submit', function(event) {
	var tr = document.createElement('tr');
	var tdVolume = document.createElement('td');

	campos.forEach( function(campo) {
		var td =  document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	tdVolume.textContent =  campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);
	tBody.appendChild(tr);

	campos[0].value  = '';
	campos[1].value  = '1';
	campos[2].value  = '0';

	campos[0].focus();

	event.preventDefault();
});