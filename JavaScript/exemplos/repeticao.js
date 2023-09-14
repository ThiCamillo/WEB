let teclado = require('prompt-sync')();

let numeros = [2, 4, 6, 3, 5, 7];
console.log(numeros);
console.log('------------');



let contador = 0;
while(contador < numeros.length){
    console.log(numeros[contador]);
    contador++;
}
console.log('------------');

contador=0;
do{
    console.log(numeros[contador]);
    contador++;
 }while(contador<numeros.length);
 console.log('------------');

 for(let i=0; i < numeros.length; i++){
    console.log(numeros[i]);
 }
 console.log('------------');

 for(let numero of numeros){
    console.log(numero);
 }
 console.log('------------');
 
 for(let numero in numeros){
    console.log(numero);
 }
 console.log('------------');