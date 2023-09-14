/*CRIE UM PROGRAMA ONDE O USUÁRIO IRÁ DIGITAR UMA FRASE. DEPOIS O PROGRAMA DEVERÁ SOLICITAR 
QUE O USUÁRIO DIGITE UMA PALAVRA. O PROGRAMA DEVE APRESENTAR A FRASE DIGITADA, 
A PALAVRA DIGITADA, BEM COMO A QUANTIDADE DE VEZES QUE A PALAVRA DIGITADA APARECE NA FRASE.*/

let teclado = require('prompt-sync')();
let numero = [];
for(let i = 0; i < 10; i++){
    numero[i] = (teclado('Informe um número: '));
    }
    let numeroControle = Number(teclado('Informe um número para pesquisa: '));
    let acumuladorNumeroControle = 0;
    for(let i = 0; i < 10; i++){
      if(numero[i] === numeroControle){
        acumuladorNumeroControle ++;
      } 
}
console.log('Quantidade de vezes em que o número aparece: ' + acumuladorNumeroControle);

/*
let teclado= require ('prompt-sync')();

 

let fraseOriginal= teclado('Informe uma frase: ');

let palavra=teclado('dInforme uma palavra para ser pesquisada: ');

let frase=fraseOriginal.replace("."," ");

frase=frse.replace

let contador=0;

for(let i=0;i<arrayFrase.length;i++){

    if(palavra==arrayFrase){

        contador++

}

}

console.log('A frase escrita foi: '+frase)

console.log('A palavra escrita foi: '+palavra)

console.log('a palavra digitada aparerce: '+contador+'X')
*/