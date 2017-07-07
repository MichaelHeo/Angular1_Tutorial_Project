angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
    // $scope Cria um escopo desse controller
     
    $scope.fotos = []; // Lista de fotos!
    $scope.filtro = '';
    $scope.mensagem = '';

    // Substitui o uso do $http
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;  
    }, function(erro){
        console.log(erro);   
    });

    $scope.remover = function(foto){
        recursoFoto.delete({fotoId: foto._id}, function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
        }, function(erro){
            console.log(error);
            $scope.mensagem = 'Nao foi possivel remover a foto ' + foto.titulo;    
        });
    }
});
