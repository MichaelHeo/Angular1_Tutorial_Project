angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

    // routeParams da acesso as rotas que estamos tentando acessar

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;
            })
            .error(function(error) {
                console.log(error);
                $scope.mensagem = 'Nao foi possivel obter a foto de ID ' + $routeParams.fotoId;
            });
    }

    $scope.submeter = function() {
        if($scope.formulario.$valid) {

            if($scope.foto._id){
                // Atualizando a foto com os novos dados!
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto alterado com sucesso!';
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Nao foi possivel alterar a foto ' + $scope.foto.titulo;
                    });
            } else {
                $http.post('v1/fotos', $scope.foto)
                    .success(function(){
                        $scope.foto = {};
                        $scope.mensagem = "Foto cadastrada com sucesso!";
                })
                .error(function(error) {
                    $scope.mensagem = "Nao foi possivel incluir a foto!";
                    console.log(error);
                });
            }
        }
    };

});
