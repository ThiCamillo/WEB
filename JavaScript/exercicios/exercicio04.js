let teclado = require('prompt-sync')();

//4 – DESENVOLVA UM PROGRAMA PARA LER 10 NÚMEROS E ESCREVA QUANTOS DESSES NÚMEROS LIDOS SÃO PARES.

let acumuladorNumerosPares = 0;
for(let i = 0; i < 10; i++){
    let numero = Number(teclado('Informe um número: '));
    if(numero % 2 === 0){
        acumuladorNumerosPares ++;  
    }
}
console.log('Quantidade de números pares: ' + acumuladorNumerosPares);

