let teclado = require('prompt-sync')();

//3 – DESENVOLVA UM PROGRAMA PARA LER 10 NÚMEROS E ESCREVA QUANTOS DESSES NÚMEROS LIDOS SÃO NEGATIVOS.


let acumuladorNumeroNegativo = 0;
for(let i = 0; i < 10; i++){
    let numero = Number(teclado('Informe um número: '));
    if(numero < 0){
        acumuladorNumeroNegativo ++;  
    }
}
console.log('Quantidade de números abaixo de zero: ' + acumuladorNumeroNegativo);



