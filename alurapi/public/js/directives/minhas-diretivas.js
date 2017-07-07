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
    });
