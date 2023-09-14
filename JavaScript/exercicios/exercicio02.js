let teclado = require('prompt-sync')();

//2 - CRIE UM PROGRAMA PARA LER O NOME DE 2 TIMES DE FUTEBOL E O NÚMERO DE GOLS MARCADOS NA PARTIDA (PARA CADA TIME).
// ESCREVA O NOME DO VENCEDOR. 
//CASO NÃO HAJA VENCEDOR DEVERÁ SER IMPRESSA A PALAVRA “EMPATE”.

let time1 = teclado('Informe o nome do time 1: ');
let gol1 = Number(teclado('Informe os gols marcados pelo time 1: '));
let time2 = teclado('Informe o nome do time 2: ');
let gol2 = Number(teclado('Informe os gols marcados pelo time 2: '));

if (gol1 > gol2) {
    console.log('O time vencedor foi: ' + time1 + ' com ' + gol1 + ' gol/s');
} else if (gol2 > gol1) {
    console.log('O time vencedor foi: ' + time2 + ' com ' + gol2 + ' gol/s');
} else {
    console.log('Empate');
}