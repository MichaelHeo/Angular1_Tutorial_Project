angular.module('alurapic').controller('FotosController', function($scope, $http){
    // $scope Cria um escopo desse controller
     
    $scope.fotos = []; // Lista de fotos!

    var promise = $http.get('v1/fotos'); // $http faz uma "promesa". Como se ele disesse que vai tentar pegar as fotos do servidor
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){ // Se a promessa for cumprida, dai vai ser armazenado no fotos
        console.log("error");  
    }); 
    /* ---------------- O codigo abaixo faz a mesma! ----------------
     * $http.get('v1/fotos')
     * .success(function(fotos){
     *      $scope.fotos = fotos;
     * })
     * .error(function(erro) {
     *      console.log(erro);
     * }
     */

});
