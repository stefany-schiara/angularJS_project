var apk = angular.module('sysApk', []);

apk.service('servico', function () {
    escopo=getScopo('divEscopo');

    this.getNome = () => {
        escopo.nome= "Seu nome";
    }

    this.pegaCep = () => {
        $http=escopo.http;
        var cep = document.getElementById('tCep').value;
        const url = "http://cep.republicavirtual.com.br/web_cep.php?cep=" + cep + "&formato=json";
        $http.get(url)
        .then(function (response) {
           escopo.trabalhandoResultado(response.data);
        });
    }

    this.trabalhandoResultado = (endereco) => {
        if(endereco.resultado == '0'){
            alert("Endereço não encontrado");
        } else if(endereco.resultado == ''){
            alert("Digite um cep!")
                }
        else {
            escopo.resultado = endereco.tipo_logradouro + " " + endereco.logradouro + " " + endereco.bairro + " " + endereco.cidade + "-" 
            + endereco.uf;     
        }

    }


});

apk.controller('sysCtrl', ['$scope', 'servico', '$http', function ($scope, servico, $http) {

    $scope.getNome=servico.getNome;  // habilitar startup
    $scope.http=$http;
    $scope.pegaCep=servico.pegaCep;
    $scope.trabalhandoResultado=servico.trabalhandoResultado;

}]);