let teclado = require('prompt-sync')();

//o prompt sempre lê em formato String.
let numero = Number(teclado('Informe um numero: '));
console.log(numero);

if(numero % 2 === 0){
    console.log('O número é par!');
}else{
    console.log('O número é impar!');
}

switch(numero){
    case 1: {
        console.log('Domingo!');
        break;
    }
    case 2: {
        console.log('Segunda!');
        break;
    }
    case 3: {
        console.log('Terça!');
        break;
    }
    case 4: {
        console.log('Quarta!');
        break;
    }
    case 5: {
        console.log('Quinta!');
        break;
    }
    case 6: {
        console.log('Sexta!');
        break;
    }
    case 7: {
        console.log('Sábado!');
        break;
    }
    default:
        console.log('O número não corresponde a um dia da semana');
}