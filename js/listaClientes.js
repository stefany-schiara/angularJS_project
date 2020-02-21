var apk = angular.module('sysApk', []);

apk.service('servico', function () {
    escopo=getScopo('divEscopo');

    this.getNome = () => {
        escopo.nome= "Seu nome";
    }

    this.buscaCLientes = () => {
        $http=escopo.http;
        const url = "http://clevermidia.com.br/ursoClientes.php";
        $http.get(url)
        .then(function (response) {
           escopo.retornoBuscaClientes(response.data.registros);
        });
    }

    this.retornoBuscaClientes = (lista) => {
        escopo.lista = lista;
    }

});

apk.controller('sysCtrl', ['$scope', 'servico', '$http', function ($scope, servico, $http) {

    $scope.getNome=servico.getNome;  // habilitar startup
    $scope.http=$http;
    $scope.buscaCLientes=servico.buscaCLientes();
    $scope.retornoBuscaClientes=servico.retornoBuscaClientes;

}]);