angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, clientes, $filter) {

	$scope.clientes = clientes.data;

	$scope.adicionarCliente = function (clientes) {

		contatosAPI.saveContato(clientes).then(function (data) {
			delete $scope.cliente;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	
	$scope.apagarContatos = function (cliente) {

		$scope.cliente = cliente.filter(function (cliente) {
			if (!cliente.selecionado) return cliente;
		});

		$scope.verificarContatoSelecionado($scope.contatos);
	};

	$scope.verificarContatoSelecionado = function (clientes) {
		
		$scope.hasContatoSelecionado = clientes.some(function (cliente) {
			return cliente.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	
	};
	
});