var apk = angular.module('sysApk', []);

apk.service('servico', function () {
    escopo=getScopo('divEscopo');

    this.getNome = () => {
        escopo.nome= "Stefany Schiara";
    }

    this.getApelido = () => {
        escopo.apelido="Isqueirinho";
    }

});

apk.controller('sysCtrl', ['$scope', 'servico', '$http', function ($scope, servico, $http) {

    $scope.getNome=servico.getNome();  // habilitar startup
    $scope.http=$http;
    $scope.getApelido=servico.getApelido;

}]);