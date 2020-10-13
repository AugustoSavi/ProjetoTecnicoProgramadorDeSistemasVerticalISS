angular.module("listaTelefonica").config(function ($routeProvider) {
	
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		
		resolve: {
			clientes: function (contatosAPI) {
				return contatosAPI.getClientes();
			}
		}
	
	});
	
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			cliente: function (contatosAPI, $route) {
				return contatosAPI.getCliente($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/login", {
		templateUrl: "view/login.html"
	});
	
	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});




	$routeProvider.otherwise({redirectTo: "/login"});
});