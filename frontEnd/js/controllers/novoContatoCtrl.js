angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, $location) {

	$scope.adicionarContato = function (contato) {
		contatosAPI.saveContato(contato).then(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};
});