/*ESCREVA UM PROGRAMA QUE LEIA E ARMAZENE 10 NÚMEROS EM UM ARRAY. 
APÓS ISSO O PROGRAMA DEVE SOLICITAR QUE O USUÁRIO INFORME MAIS UM NÚMERO. 
O PROGRAMA DEVE INFORMAR QUANTAS VEZES ESSE NÚMERO APARECE NO ARRAY.*/

let teclado = require('prompt-sync')();
let numero = [];
for(let i = 0; i < 10; i++){
    numero[i] = Number(teclado('Informe um número: '));
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
let numero = [10];
for(let i = 0; i < 10; i++){
    numero[i] = Number(teclado('Informe um número: '));
    }
    let numeroPesquisa = Number(teclado('Informe o numero a ser pesquisado: '));
    let acumuladorNumeroControle = 0;
    for(let i = 0; i < 10; i++){
      if(numero[i] === numeroControle){
        acumuladorNumeroControle ++;
      } 
}
    */