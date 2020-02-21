// =========== INCLUSAO DE MASCARA =========== \\

/*
 * Resolve qual m�scara deve ser utilizada, referente aos par�metros
 * Adicione isso ao input ( onkeydown="javascript: doMask( this, '$tipoMascara', event);" )
 * @param args N�o � necess�rio a implementa��o em todos os tipos de m�scaras, apenas nos 
 * necess�rio. Esse par�metro pode ser qualquer coisa, desde que a fun��o respons�vel
 * saiba o que �.
 */
function doMask( elemento, mask, evento, args ){
    switch ( mask )
    {
        case 'number':
            if ( ! doNumberMask( evento ) ){
                cancelarEvento( evento );
            } else{
                if ( evento.keyCode == 110 || evento.keyCode == 188 || // PONTO no Numpad / ALFA
                    evento.keyCode == 190 || evento.keyCode == 194 ){ // VIRGULA no Numpad / ALFA

                    if ( !args || args == "true" ){//Se nada for passado em args, ou se quer que seja seguido o padr�o
                        index = elemento.value.indexOf( "," );
                        if ( index >= 0 ){
                            cancelarEvento( evento )
                        } else{
                            index = elemento.value.indexOf( "." );
                            if ( index >= 0 ){
                                cancelarEvento( evento )
                            }
                        }
                    } else {
                        cancelarEvento( evento )
                    }
                }
            }
            limpaNumber(elemento);
            break;
        case 'decimal':
            doDecimalMask( elemento, evento );
            break;
        case 'double':
            doDoubleMask( elemento, evento );
            break;
        case 'date':
            doDateMask( elemento, evento );
            break;
        case 'mesAno':
            doMesAnoMask( elemento, evento );
            break;
        case 'timestamp':
            doTimestampMask( elemento, evento );
            break; 
        case 'cnpj':
            doCnpjMask( elemento, evento );
            break;
        case 'cpf':
            doCpfMask( elemento, evento);
            break;
        case 'cep':
            doCepMask( elemento, evento );
            break;
        case 'telefone':
            doTelefoneMask( elemento, evento );
            break;
        case 'celular':
            doCelularMask( elemento, evento );
            break;
            case 'hora':
            doHoraMask( elemento, evento );
            break;
        case 'time':
            doTimeMask( elemento, evento );
            break;
        case 'horaMinutos':
            doHoraMinutosMask( elemento, evento );
            break;
    }
}

// ******************
// FUNCOES DE SUPORTE
// ******************

/**
 * Cancela o evento, independente da plataforma
 */
function cancelarEvento( evento ) {
    if ( evento.preventDefault ) {
        evento.preventDefault();
    } else {
        evento.returnValue = false;
    }
}

function doNumberMask( evento ){
    if (( !(evento.keyCode >= 96 && evento.keyCode <= 105)) && // 0 a 9 no Num pad
        ( !(evento.keyCode >= 48 && evento.keyCode <= 57))  && // 0 a 9 no Alfa
        evento.keyCode != 8 &&	// Backspace
        evento.keyCode != 9 &&	// TAB
        evento.keyCode != 13 &&	// Enter
        evento.keyCode != 16 &&	// Shift
        evento.keyCode != 17 &&	// Ctrl
        evento.keyCode != 18 &&	// Alt
        evento.keyCode != 20 &&	// Capslock
        evento.keyCode != 27 &&  // Esc
        evento.keyCode != 33 &&	// Page Up
        evento.keyCode != 34 &&	// Page Down
        evento.keyCode != 35 &&	// End
        evento.keyCode != 36 &&	// Home
        evento.keyCode != 37 &&	// Seta Esquerda
        evento.keyCode != 38 &&	// Seta Cima
        evento.keyCode != 39 &&	// Seta Direita
        evento.keyCode != 40 &&	// Seta Baixo
        evento.keyCode != 45 &&	// Insert
        evento.keyCode != 46 &&	// Del
        evento.keyCode != 110 && // VIrgula no Numpad
        evento.keyCode != 144 && // Numlock
        evento.keyCode != 188 && // VIrgula no Alfa
        evento.keyCode != 189 && // - no Alfa
        evento.keyCode != 109 && // - no Numpad
        evento.keyCode != 190 && // Ponto no Alfa
        evento.keyCode != 194 	 // Ponto no Num pad
		
        )
        {
        return false;
    }

    return true;
}

function doDecimalMask( elemento, evento ){
    if (	( !(evento.keyCode >= 96 && evento.keyCode <= 105)) && // 0 a 9 no Num pad
        ( !(evento.keyCode >= 48 && evento.keyCode <= 57))  && // 0 a 9 no Alfa
        ( evento.keyCode != 100 ) &&
        ( evento.keyCode != 188 ) &&
        evento.keyCode != 8 &&	// Backspace
        evento.keyCode != 9 &&	// TAB
        evento.keyCode != 13 &&	// Enter
        evento.keyCode != 16 &&	// Shift
        evento.keyCode != 17 &&	// Ctrl
        evento.keyCode != 18 &&	// Alt
        evento.keyCode != 20 &&	// Capslock
        evento.keyCode != 27 &&  // Esc
        evento.keyCode != 33 &&	// Page Up
        evento.keyCode != 34 &&	// Page Down
        evento.keyCode != 35 &&	// End
        evento.keyCode != 36 &&	// Home
        evento.keyCode != 37 &&	// Seta Esquerda
        evento.keyCode != 38 &&	// Seta Cima
        evento.keyCode != 39 &&	// Seta Direita
        evento.keyCode != 40 &&	// Seta Baixo
        evento.keyCode != 45 &&	// Insert
        evento.keyCode != 46 &&	// Del
        evento.keyCode != 144 && // Numlock
        evento.keyCode != 190 && // Ponto no Alfa
        evento.keyCode != 194 )  // Ponto no Num pad
        {
        return false;
    }

    return true;
}

function doDoubleMask( elemento, evento ){
    if (	( !(evento.keyCode >= 96 && evento.keyCode <= 105)) && // 0 a 9 no Num pad
        ( !(evento.keyCode >= 48 && evento.keyCode <= 57))  && // 0 a 9 no Alfa
        ( evento.keyCode != 100 ) &&
        ( evento.keyCode != 188 ) &&
        evento.keyCode != 8 &&	// Backspace
        evento.keyCode != 9 &&	// TAB
        evento.keyCode != 13 &&	// Enter
        evento.keyCode != 16 &&	// Shift
        evento.keyCode != 17 &&	// Ctrl
        evento.keyCode != 18 &&	// Alt
        evento.keyCode != 20 &&	// Capslock
        evento.keyCode != 27 &&  // Esc
        evento.keyCode != 33 &&	// Page Up
        evento.keyCode != 34 &&	// Page Down
        evento.keyCode != 35 &&	// End
        evento.keyCode != 36 &&	// Home
        evento.keyCode != 37 &&	// Seta Esquerda
        evento.keyCode != 38 &&	// Seta Cima
        evento.keyCode != 39 &&	// Seta Direita
        evento.keyCode != 40 &&	// Seta Baixo
        evento.keyCode != 45 &&	// Insert
        evento.keyCode != 46 &&	// Del
        evento.keyCode != 144 && // Numlock
        evento.keyCode != 190 && // Ponto no Alfa
        evento.keyCode != 194 )  // Ponto no Num pad
        {
        return false;
    }

    return true;
}

function doDateMask( element, evento ){
    element.maxLength = "10";
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return;
    }

    // Verifica edicao do campo
    if (  isNavegation( evento ) ) {
        return;
    }

    var mydata	= "";
    var data	= element.value;
    mydata		= mydata + data;

    if (  mydata.length == 2 || mydata.length == 5) {
        mydata			+= '/';
        element.value	 = mydata;
    }
}

function doMesAnoMask( element, evento ){
    element.maxLength = "7";
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return;
    }

    // Verifica edicao do campo
    if (  isNavegation( evento ) ) {
        return;
    }

    var mydata	= "";
    var data	= element.value;
    mydata		= mydata + data;

    if (  mydata.length == 2 ) {
        mydata			+= '/';
        element.value	 = mydata;
    }
}

function doTimestampMask( element, evento ) {

    doDateMask( element, evento );

    // Verifica edicao do campo
    if (  isNavegation( evento ) ) {
        return;
    }

    element.maxLength = "19";
	
    var mydata	= "";
    var data	= element.value;
    mydata		= mydata + data;

    if (mydata.length == 10) {

        mydata       += ' ';
        element.value = mydata;
    }
    else if (  mydata.length == 13 || mydata.length == 16) {
        mydata       += ":";
        element.value = mydata;
    }
}

function doCnpjMask( element, evento, valida )
{
    if ( element.form ){
        if ( element.form.pais ){
            pais = element.form.pais.value.toUpperCase();
            if ( pais != "BRASIL" && pais != "BRAZIL" ){
                return true;
            }
        }
    }
	
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }

    element.maxLength = "18";

    if (evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 2 || text.length == 6 ) {
        text += ".";
    }
    else if ( text.length == 10 ) {
        text += "/";
    }
    else if ( text.length == 15 ) {
        text += "-";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doCpfMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    element.maxLength = "14";

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 3 || text.length == 7 ) {
        text += ".";
    } else if ( text.length == 11 ) {
        text += "-";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doCepMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    element.maxLength = "9";

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 5 ) {
        text += "-";
    }

    element.value		= text;
    evento.returnValue = true;
    return true;
}

function doTelefoneMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    // element.maxLength = "9"; // retirado para que possa ser inseridos telefones do tipo 0800 e afins

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 4 ) {
        text += "-";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doCelularMask( element, evento ){
/* 
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
 */    // element.maxLength = "9"; // retirado para que possa ser inseridos telefones do tipo 0800 e afins

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 0 ) {
        text = "(" + text;
    }

    if (  text.length == 3 ) {
        text += ') ';
    }

    if (  text.length == 6 ) {
        text += ' ';
    }

    if (  text.length == 11 ) {
        text += '-';
    }

    if (  text.length == 4 ) {
        text += "-";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doHoraMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    element.maxLength = "8";

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 2 || text.length == 5 ) {
        text += ":";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doTimeMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    element.maxLength = "5";

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 2 ) {
        text += ":";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function doHoraMinutosMask( element, evento ){
    if ( !doNumberMask( evento ) ) {
        cancelarEvento( evento )
        return false;
    }
    element.maxLength = "6";

    if (  	evento.keyCode == 110 || // Virgula no Numpad
        evento.keyCode == 188 || // Virgula no Alfa
        evento.keyCode == 190 || // Ponto no Alfa
        evento.keyCode == 194  ) // Ponto no Num pad)
        {
        cancelarEvento( evento )
        return false;
    }

    // Verifica edicao do campo
    if ( isNavegation( evento ) ) {
        return true;
    }

    text = element.value;
    if (  text.length == 3 ) {
        text += ":";
    }

    element.value		= text;
    evento.returnValue	= true;

    return true;
}

function isNavegation( evento )
{
    // Verifica edicao do campo
    if (  	evento.keyCode == 8  || // Backspace
        evento.keyCode == 35 || // End
        evento.keyCode == 36 || // Home
        evento.keyCode == 37 || // Seta Esquerda
        evento.keyCode == 39 || // Seta Direita
        evento.keyCode == 46 )  // Del
        {
        return true;
    }

    return false;
}


// =========== VERIFICACAO DE MASCARA =========== \\


/** Metodo que verifica se os valores estao batendo com mascara necessaria. 
 * Deve ser chamado no "onBlur".
 * @param element O <object> em questao
*/
function verifyMask( elemento, mask ){
    switch ( mask )
    {
        case 'date':
            retorno = verifyDate( elemento, verifyMask.arguments[2] );
            return retorno;
    }
}

/**
 * Verifica se � uma data valida.
 * @param elemento Objeto do form (text) a ser validado
 * @param validarHoje valor booleano para indicar se alerta que a data 
 * inserida � maior que hoje 
 */
function verifyDate( elemento, validarHoje )
{
    var data   = elemento.value;

    if ( data == "" ) {
        return true;
    }

    if ( data.length < 10 ){
        alert( "Verifique o valor digitado!" );
        elemento.focus();
        return false;
    }

    dia  = data.substring(0,2);
    mes  = data.substring(3,5);
    ano  = data.substring(6,10);

    retorno = true;

    // verifica o dia valido para cada mes
    if ((dia < 1)||(dia < 1 || dia > 30) && (  mes == 4 || mes == 6 || mes == 9 || mes == 11 ) || dia > 31) {
        retorno = false;
    }

    // verifica se o mes e valido
    if (mes < 01 || mes > 12 ) {
        retorno = false;
    }

    // verifica se e ano bissexto
    if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4 ) ) ) ) {
        retorno = false;
    }

    if ( !retorno ) {
        alert('Data invalida!');
        elemento.value='';
        elemento.focus();
    }
	
    if( retorno ){
        if( validarHoje ){
            auxHoje = isTodayHigher( elemento );
            if( auxHoje < 0 ){
                alert( "Aviso:\nA data � menor que hoje" );
            }
        }
    }

    return retorno;
}

/**
 * Verifica se a data do objeto passado � maior que hoje
 * @param elemento campo do formulario a ser validado
 * @return um int. 0(zero) se as datas forem iguais, -1 se hoje for maior
 * ou 1 se hoje for menor
 */
function isTodayHigher( elemento ){
    var data   = elemento.value;

    if ( data == "" ) {
        return true;
    }

    if ( data.length < 10 ){
        alert( "Verifique o valor digitado!" );
        elemento.focus();
        return false;
    }

    objDate = new Date();
    dia1  = objDate.getDate();
    mes1  = objDate.getMonth()+1;
    ano1  = objDate.getYear();

    dia2  = data.substring(0,2);
    mes2  = data.substring(3,5);
    ano2  = data.substring(6,10);

    if( ano1 == ano2 ){
        if( mes1 == mes2 ){
            if( dia1 == dia2 ){
                return 0;
            }else if( dia1 > dia2 ){
                return -1;
            }else if( dia1 < dia2 ){
                ;
                return 1;
            }
        }else if( mes1 > mes2 ){
            return -1;
        }else if( mes1 < mes2 ){
            return 1;
        }
    }else if( ano1 > ano2 ){
        return -1;
    }else if( ano1 < ano2){
        return 1;
    }

    return 0;
}

function dataNumGent(parm)
{
    var retorno=parm;
    if (parm.length > 9)
    {
        retorno=parm.substring(8,10)+"/"+parm.substring(5, 7)+"/"+parm.substring(0, 4);
    }
    return retorno;
}

function dataGentNum(parm)
{
    var retorno=parm;
    if (parm.length > 9)
    {
        retorno=parm.substring(6,10)+"-"+parm.substring(3, 5)+"-"+parm.substring(0, 2);
    }
    return retorno;
}

function dataGentNumComTempo(parm)
{
    var retorno=parm;
    if (parm.length > 9)
    {
        var parte=parm.substring(6,10)+"-"+parm.substring(3, 5)+"-"+parm.substring(0, 2);
        var resto=parm.substring(10,parm.length);
        retorno=parte+resto;
    }
    return retorno;
}

function dataNumGentComTempo(parm)
{
    var retorno=parm;
    if (parm.length > 9)
    {
        var parte=parm.substring(8,10)+"/"+parm.substring(5, 7)+"/"+parm.substring(0, 4);
        var resto=parm.substring(10,parm.length);
        retorno=parte+resto;
    }
    return retorno;
}

function verifData( elemento, validarHoje )
{
	var data   = elemento.value;

	if ( data == "" ) {
		return true;
	}

	if ( data.length < 10 ){
		alert( "Verifique o valor digitado!" );
		elemento.focus();
		return false;
	}

	dia  = data.substring(0,2);
	mes  = data.substring(3,5);
	ano  = data.substring(6,10);

	retorno = true;

	// verifica o dia valido para cada mes
	if ((dia < 1)||(dia < 1 || dia > 30) && (  mes == 4 || mes == 6 || mes == 9 || mes == 11 ) || dia > 31) {
		retorno = false;
	}

	// verifica se o mes e valido
	if (mes < 01 || mes > 12 ) {
		retorno = false;
	}

	// verifica se e ano bissexto
	if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4 ) ) ) ) {
		retorno = false;
	}

	if ( !retorno ) {
		alert('Data invalida!');
		elemento.value='';
		elemento.focus();
	}

	if( retorno ){
		if( validarHoje ){
			auxHoje = isTodayHigher( elemento );
			if( auxHoje < 0 ){
				alert( "Aviso:\nA data � menor que hoje" );
			}
		}
	}

	return retorno;
}
function limpaNumber(elemento)
{
	var proibidos="!@#$%^&*()";
	var conteudo=elemento.value;
	for (var i=0; i< proibidos.length; i++)
	{
		var c=proibidos.substring(i,i+1);
		conteudo=conteudo.replaceAll(c,'');
	}
	elemento.value=conteudo;
}

function verifDataHora( elemento, validarHoje )
{
	var data   = elemento.value;

	if ( data == "" ) {
		return true;
	}

	if ( data.length < 16 ){
		alert( "Informe data e hora no formato dd/mm/aaaa hh:mm !" );
		elemento.focus();
		return false;
	}

	dia  = data.substring(0,2);
	mes  = data.substring(3,5);
	ano  = data.substring(6,10);
	hora= data.substring(11,13);
	minuto=data.substring(14,16);

	retorno = true;

	// verifica o dia valido para cada mes
	if ((dia < 1)||(dia < 1 || dia > 30) && (  mes == 4 || mes == 6 || mes == 9 || mes == 11 ) || dia > 31) {
		retorno = false;
	}

	// verifica se o mes e valido
	if (mes < 01 || mes > 12 ) {
		retorno = false;
	}

	// verifica se e ano bissexto
	if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4 ) ) ) ) {
		retorno = false;
	}
	if (hora > 23){
		retorno=false;
	}
	if (minuto > 59){
		retorno=false;
	}

	if ( !retorno ) {
		alert('Data invalida!');
		elemento.value='';
		elemento.focus();
	}

	if( retorno ){
		if( validarHoje ){
			auxHoje = isTodayHigher( elemento );
			if( auxHoje < 0 ){
				alert( "Aviso:\nA data � menor que hoje" );
			}
		}
	}

	return retorno;
}