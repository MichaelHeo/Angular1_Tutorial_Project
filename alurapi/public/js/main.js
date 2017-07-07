angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){
    // Configurando Rotas!
   
    // Permite que nao seja necessario o uso de /# na rota
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});

});// Criando um modulo do Angular
// So se coloca o segundo parametro "[]" pq esse eh um modulo sendo criado! Se fosse para utilizar um modulo, ficaria sem o "[]"
