/*DESENVOLVA UM PROGRAMA QUE LEIA E ARMAZENE 10 NOMES EM UM ARRAY. 
APRESENTE OS NOMES NA ORDEM DE LEITURA E DEPOIS NA ORDEM INVERSA DA LEITURA.*/

let teclado = require('prompt-sync')();

let nomes = [];
for (let i = 0; i < 10; i++) {
    nomes[i] = teclado('Informe um nome: ');
}
console.log('Ordem de leitura: ' + nomes.sort());
nomes.sort((a,b) => {
    if(a>b)
    return -1;
    if(a<b)
    return 1;
    return 0
});
console.log('Ordem inversa: ' + nomes);


