// faça um programa para calcular o valor de uma viagem.
/*
você tera 5 variaveis, sendo:
    preço do etanol;
    preço da gasolina;
    o tipo de combustivel;
    gasto medio do combustivel do carro em km;
    distancia em km viagem
*/

const precoDaGasolina = 7.80;
const precoDoEtanol = 5;
const kmPorLitro = 8;
let kmDaViagem = 100;
let isCombustivel = 'Etanol';
const combustivelConsumido = kmDaViagem/kmPorLitro;
const valorGasolina = combustivelConsumido * precoDaGasolina;
const valorEtanol = combustivelConsumido * precoDoEtanol;

if (isCombustivel === 'Gasolina') {
    console.log(`o valor total gasto com gasolina sera: ${valorGasolina}`);
} else {
    console.log(`o valor total gasto com etanol sera: ${valorEtanol}`);

}