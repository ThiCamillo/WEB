console.log('\n----------------------------------------');
console.log('\n-----STRING-----');

let curso = 'Análise e Desenvolvimento de Sistemas.';
let tamanho = curso.length;
console.log(curso);
console.log('Tamanho da String: ' + tamanho);

console.log('\n-----Concat-----');
let disciplina = 'Desenvolvimento Web ';
let conteudo = 'com JavaScript!';
console.log(disciplina.concat(conteudo));

console.log('\n-----Trim-----');
let texto = '     Teste de remoção de espaços!     ';
console.log(texto.trim());
console.log(texto);

console.log('\n-----CaixaAlta-----CaixaBaixa-----');
let caixaAlta = 'DESENVOLVIMENTO WEB';
let caixaBaixa = 'html, css e javascript';
console.log(caixaAlta.toLowerCase());
console.log(caixaBaixa.toUpperCase());

console.log('\n-----IndexOF-----');
let indice = curso.indexOf('Desen');
console.log('Índice: ' + indice);

console.log('\n-----Slice-----');
let pedaco = curso.slice(10, 25);
console.log(pedaco);
console.log(curso);

console.log('\n-----Replace-----');
let troca = curso.replace('Desenvolvimento', 'Criação');
console.log(troca);

console.log('\n-----Split-----');
let recorte = curso.split(' ');
console.log(recorte);