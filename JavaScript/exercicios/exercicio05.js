let teclado = require('prompt-sync')();

//5 – FAÇA UM PROGRAMA ONDE O USUÁRIO DEFINA A QUANTIDADE DE NÚMEROS A SEREM LIDOS
// E EM SEGUIDA LEIA OS NÚMEROS.
// DEPOIS DE LER TODOS OS NÚMEROS O PROGRAMA DEVE APRESENTAR NA TELA O MAIOR
//DOS NÚMEROS LIDOS, O MENOR DOS NÚMEROS LIDOS E A MÉDIA DOS NÚMEROS LIDOS.

let tamanho = Number(teclado('Informe a quantidade de numero a ser lido: '));
let acumulador = 0;
let menorValor = 0;
let maiorValor = 0;
for(let i = 0; i < tamanho; i++){
    let numero = Number(teclado('Informe um número: '));
    acumulador +=numero;
    if(i === 0){
        menorValor = numero;
        maiorValor = numero;
    }
    if(numero < menorValor){
        menorValor = numero;  
    }
    if(numero > maiorValor){
        maiorValor = numero;  
    }
}
console.log('Média: ' + (acumulador/tamanho));
console.log('Menor Valor: ' + menorValor);
console.log('Maior Valor: ' + maiorValor);