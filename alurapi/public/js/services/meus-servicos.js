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
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {
    // $q retorna uma promessa
    // Todos os Scopes herdam do rootScope. Ele eh o pai de todos os Scopes

    var servico = {};
    var evento = 'fotoCadastrada';

    servico.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            // Resolve - Vai estar disponivel para o then do promisse
            // Reject - Mensagem de erro
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function(){
                    $rootScope.$broadcast(evento); // Criando um evento chamado 'fotoCadastrada' no Angular
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
                    $rootScope.$broadcast(evento); // Criando um evento chamado 'fotoCadastrada' no Angular
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
