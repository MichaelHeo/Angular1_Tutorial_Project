angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {
    // recursoFoto eh o nome do servico! 
    // Dessa forma, recursoFoto se torna injetavel em outros Controllers
    return $resource('/v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
});
