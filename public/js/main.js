var frase = $(".frase").text();
var numeroDePalavras = frase.split(' ').length;
var tamanhoDaFrase = $('#tamanhoDaFrase');

tamanhoDaFrase.text(numeroDePalavras);