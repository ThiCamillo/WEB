/*ESCREVA UM PROGRAMA QUE PERMITA A LEITURA DAS NOTAS DE UMA TURMA DE 10 ALUNOS. 
ARMAZENE AS NOTAS EM UM ARRAY. O PROGRAMA DEVE CALCULAR A MÉDIA DA TURMA E CONTAR QUANTOS 
ALUNOS OBTIVERAM NOTA ACIMA DESTA MÉDIA CALCULADA. ESCREVA A MÉDIA DA TURMA E O RESULTADO 
DA CONTAGEM.*/

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
let teclado = require('prompt-sync')()

 

let notas = [];

let soma = 0;

let contador=0;

for (let i = 0; i < 10; i++) {

    notas[i] = Number(teclado('Digite a ' +(i + 1) + '° nota:'))

    soma += notas[i];

}

 

let media = soma / notas.length;

//pra cada nota dentro do arrei de notas

for (let nota of notas) {

   if (nota >= media) {

       contador++

    }

   

}

console.log('media '+media)

console.log('qunatidades de alunos com media: '+contador)
*/