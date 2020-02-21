var apk = angular.module('sysApk', []);

apk.service('servico', function () {
    escopo=getScopo('divEscopo');

    this.getNome = () => {
        escopo.nome= "Seu nome";
    }

    this.getCampos = () => {
        var ok = true;

        if(escopo.tNome == undefined || escopo.tNome == '') {
            alert("Preenche o nome");
            ok = false;
        }

        if(ok){
            if(escopo.tNasc == undefined || escopo.tNasc == '') {
                alert("Informe a data de nascimento");
                ok = false;
            }
        }

        if(ok){
            if(escopo.tEmail == undefined || escopo.tEmail == '') {
                alert("Informe seu e-mail");
                ok = false;       
            }
        }

        if(ok){
            if(escopo.tEmail.indexOf('@') < 1) {
                alert("Email invalido");
                ok = false;       
            }
        }

        if(ok){
            if(escopo.tEmail.indexOf('@')){
                alert("Email inválido");
                ok = false;
            }
        }

        if(ok){
            var n = escopo.tEmail.indexOf('@');
            var posPonto = escopo.tEmail.lastIndexOf('.');
            if(posPonto < n) {
                alert("Email invalido");
                ok = false;
            }
        }

        if(ok) {
            var url = "http://dominio.com.br/api.php?nome=" + escopo.tNome;
            url += '&tNasc=' + escopo.tNasc;
            url += '&tEmail=' + escopo.tEmail;
        }

        if(ok) {
            //location.href = 'listaClientes.html';
            //window.open(listaClientes.html, '_black');
            window.open('listaClientes.html', '_top');
        }
    } 


});

apk.controller('sysCtrl', ['$scope', 'servico', '$http', function ($scope, servico, $http) {

    $scope.getNome=servico.getNome;  // habilitar startup
    $scope.http=$http;
    $scope.getCampos=servico.getCampos;

}]);