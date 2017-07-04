angular.module('alurapic').controller('FotosController', function($scope){
    // $scope Cria um escopo desse controller
    
    $scope.foto = {
        titulo: 'Leao',
        url: 'https://i.ytimg.com/vi/92r4CSt8txw/maxresdefault.jpg'
    }; // Adicionou a foto dinamicamente no escopo do controller

});
