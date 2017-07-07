angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto){

    // routeParams da acesso as rotas que estamos tentando acessar

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(error) {
            console.log(error);
            $scope.mensagem = 'Nao foi possivel obter a foto de ID ' + $routeParams.fotoId;
        });
    }

    $scope.submeter = function() {
        if($scope.formulario.$valid) {

            if($scope.foto._id){
                // Atualizando a foto com os novos dados!
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem = 'Foto alterado com sucesso!';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Nao foi possivel alterar a foto ' + $scope.foto.titulo;
                });
            } else {
                recursoFoto.save($scope.foto, function(){
                        $scope.foto = {};
                        $scope.mensagem = "Foto cadastrada com sucesso!";
                }, function(error){
                    $scope.mensagem = "Nao foi possivel incluir a foto!";
                    console.log(error);
                });
            }
        }
    };

});
