angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	
	var _getClientes = function () {

		return $http.get(config.baseUrl + "/clientes");
	};

	var _getCliente = function (id) {
		return $http.get(config.baseUrl + "/clientes/" + id);
	};

	var _saveCliente = function (cliente) {
		return $http.post({
		url: config.baseUrl + "/clientes",
		dataType:'jsonp',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
        },
		data: cliente});
	};

	var _deleteCliente = function (id) {
		return $http.delete(config.baseUrl + "/clientes/" + id);
	};

	return {
		getClientes: _getClientes,
		getCliente: _getCliente,
		saveCliente: _saveCliente,
		deleteCliente: _deleteCliente,
	};
});