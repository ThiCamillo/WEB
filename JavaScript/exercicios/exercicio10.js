/*CRIE UM PROGRAMA QUE DADO UM TEXTO DIGITADO PELO USUÁRIO O PROGRAMA TROQUE TODAS AS 
OCORRÊNCIAS DE UMA PALAVRA POR OUTRA. PARA ISSO O USUÁRIO DEVERÁ DIGITAR O TEXTO, A PALAVRA 
A SER PROCURADA E A PALAVRA A SER TROCADA. AO FINAL O PROGRAMA DEVE MOSTRAR O TEXTO ORIGINAL, 
O NOVO TEXTO E INFORMAR QUANTAS OCORRÊNCIAS DE TROCA OCORRERAM.*/

/*
[quarta-feira 09:45] LYANDRA ANDRADE MUNIZ SILVA

 

const teclado = require('prompt-sync')();

 

 

 

let texto = teclado(' Informe um texto: ')

 

let busca = teclado(' Informe a palavra a ser pesquisada: ');

 

let troca = teclado(' Informe a palavra a ser trocada: ');

 

 

 

// let regex = /\baula\b/gi;

 

let regex = new RegExp('\\b'+ busca+'\\b', 'gi');

 

console.log(regex);

 

let textoModificado = texto.replace(regex, troca);

 

console.log(' Texto Original: ' + texto);

 

console.log('Texto Modificado ' + textoModificado);

 

texto = texto.replace('.' , ' ');

 

texto = texto.replace(',' , ' ');

 

texto = texto.replace('!' , ' ');

 

texto = texto.replace('?' , ' ');

 

 

 

let palavras = texto.split('  ');

 

let ocorrencia = 0;

 

for(let palavra of palavras){

 

    if(palavra.toLocaleLowerCase() == busca.toLocaleLowerCase()){

 

        ocorrencias++;

 

    }

 

}

 

console.log('Ocorrências: ' + ocorrencias);
*/