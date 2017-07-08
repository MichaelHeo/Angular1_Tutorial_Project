angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {
    // recursoFoto eh o nome do servico! 
    // Dessa forma, recursoFoto se torna injetavel em outros Controllers
    return $resource('/v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFotos', function(recursoFoto, $q) {
    // $q retorna uma promessa

    var servico = {};

    servico.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            // Resolve - Vai estar disponivel para o then do promisse
            // Reject - Mensagem de erro
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function(){
                    resolve({
                        mensagem: 'Foto ' + foto.titulo + ' atualizado com sucesso!',
                        inclusao: false
                    });
                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: 'Nao foi possivel alterar a foto ' + foto.titulo
                    });
                });
            } else {
                recursoFoto.save(foto, function(){
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' incluida com sucesso!',
                        inclusao : true
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem: 'Nao foi possivel incluir a foto ' + foto.titulo
                    });
                });
            }
        });
    };
    return servico
});
