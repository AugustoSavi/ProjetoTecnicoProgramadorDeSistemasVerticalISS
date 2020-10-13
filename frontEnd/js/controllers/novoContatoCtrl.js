angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, $location) {

	$scope.adicionarCliente = function (cliente) {

		contatosAPI.saveCliente(cliente).then(function (data) {
			
			console.log(data)
			
			delete $scope.cliente;

			$location.path("/contatos");
		});
	};
});