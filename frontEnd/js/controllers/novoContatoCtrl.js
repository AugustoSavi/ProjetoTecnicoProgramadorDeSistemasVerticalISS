angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, $location) {


	$scope.adicionarCliente = function (cliente) {

		contatosAPI.saveCliente(cliente).then(function (data) {
			
			delete $scope.cliente;

            $location.path("/contatos");
            
		});
	};


	var Telefones = [{}];

	$scope.adicionarNovoTelefone = function(cadastroTelefones) {

        Telefones.push(cadastroTelefones);
    }
});