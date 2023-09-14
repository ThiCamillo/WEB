let teclado = require('prompt-sync')();

//1 - DESENVOLVA UM PROGRAMA QUE LEIA AS NOTAS DA 1ª E 2ª AVALIAÇÕES DE UM ALUNO. 
//CALCULE A MÉDIA ARITMÉTICA SIMPLES E ESCREVA UMA MENSAGEM QUE DIGA SE O ALUNO FOI OU NÃO APROVADO (CONSIDERAR
//    QUE NOTA IGUAL OU MAIOR QUE 7 O ALUNO É APROVADO). ESCREVA TAMBÉM A MÉDIA CALCULADA.

let nota1 = Number(teclado('Informe a nota 1 do aluno: '));
let nota2 = Number(teclado('Informe a nota 2 do aluno: '));
let media = (nota1 + nota2) /2;
if(media >= 7){
    console.log('O aluno foi aprovado e sua média final é: ' + media);
}else{
    console.log('O aluno foi reprovado e sua média final é: ' + media);
}

//USANDO UM TERNARIO - condicao booleana
console.log(media >=7 ? 'APROVADO' : 'REPROVADO');