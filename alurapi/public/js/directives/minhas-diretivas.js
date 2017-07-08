angular.module('minhasDiretivas', [])
    .directive('meuPainel', function(){
        
        var ddo = {}; // Directive Direction Object. Eh o objeto da diretiva configurada e bonitinha
    
        ddo.restrict = "AE"; // Attribute Element - Significa que essa diretiva pode ser usada como Atributo ou Elemento

        ddo.scope = { // Esse nao eh o mesmo scope que $scope.
            titulo: '@' // Isso eh tipo <meu-painel titulo=""></meu-painel> e o @ indica que o que for passado no HTML, vai ser recebido como valor para dentro do scope da diretiva criada.
        };

        ddo.transclude = true; // Mantem os elementos filhos na hora de processar o HTML

        ddo.templateUrl = 'js/directives/meu-painel.html'
    
        return ddo;
    })
    .directive('minhaFoto', function(){
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            titulo: '@',
            url: '@'
        };
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}"';
        return ddo;
    })
    .directive('meuBotaoPerigo', function(){
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',// Copia de valor, uma String!
            acao: '&' // & é usado quando vc quer passar uma expressão, no caso aqui é uma função.
        };
        ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};
        ddo.restrict = "A";

        ddo.link = function(scope, element){
            // link permite colocar "watchers" de propriedades
            scope.$on('fotoCadastrada', function() {
                // Ouvino o disparo do evento fotoCadastrada do Angular
                element[0].focus();
            });
        };
        return ddo;
    });
