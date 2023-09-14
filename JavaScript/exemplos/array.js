console.log('\n-----length-----');
let cidades = ['Florianópolis'];
let tamanho = cidades.length;
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);


console.log('\n-----push-----');
cidades.push('Biguaçu');
tamanho = cidades.push('Curitiba', 'Porto Alegre');
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);


console.log('\n-----pop-----');
let cidade = cidades.pop();
tamanho = cidades.length;
console.log('Cidade removida: ' + cidade);
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);


console.log('\n-----unshift-----');
tamanho = cidades.unshift('São José', 'Palhoça');
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);


console.log('\n-----shift-----');
cidade = cidades.shift();
tamanho = cidades.length;
console.log('Cidade removida: ' + cidade);
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);


console.log('\n-----splice-----');
cidades.splice(1, 1);
tamanho = cidades.length;
console.log(cidades);
console.log('Tamanho do Array: ' + tamanho);

console.log('\n-----sort-----');
cidades.sort();
console.log(cidades);

console.log('\n----------------------------------------');
console.log('\n-----MATRIZES-----');

let numeros = [];
let valores = [];

for (let linha = 0; linha < 3; linha++) {
    for(let coluna = 0; coluna < 4; coluna++){
        valores[coluna] = coluna + 1;   
    }
    numeros[linha] = valores;
}
for(let linha = 0; linha < 3; linha++){
    console.log(numeros[linha]);
}