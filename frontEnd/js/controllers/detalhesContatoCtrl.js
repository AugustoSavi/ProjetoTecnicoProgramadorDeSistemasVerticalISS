angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, cliente) {

	$scope.cliente = cliente.data;
});