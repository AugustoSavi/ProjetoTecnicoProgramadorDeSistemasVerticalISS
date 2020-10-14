angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, clientes, contatosAPI,$location) {

	$scope.clientes = clientes.data;


	$scope.apagarContatos = function (cliente) {

		contatosAPI.deleteCliente(cliente.id_cliente).then(function (data) {


			delete $scope.cliente;

			$location.path("/contatos");

			
		});

	};

});