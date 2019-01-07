class DateHelper {
	

    dataParaTexto(data) {
    	var data = new Date(data);
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }

    textoParaData(texto) {
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
}