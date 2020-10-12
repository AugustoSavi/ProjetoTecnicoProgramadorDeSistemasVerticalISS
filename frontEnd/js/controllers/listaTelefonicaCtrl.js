angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, $filter) {

	$scope.contatos = contatos.data;

	$scope.adicionarContato = function (contato) {

		contatosAPI.saveContato(contato).then(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
		$scope.verificarContatoSelecionado($scope.contatos);
	};
	$scope.verificarContatoSelecionado = function (contatos) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
});