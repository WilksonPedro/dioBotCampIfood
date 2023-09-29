// faça um programa para calcular o valor de uma viagem.
const precoCombustivel = 7.80;
const kmPorLitro = 8;
let kmDaViagem = 47;

const calculaValor = () => ((kmDaViagem / kmPorLitro) * precoCombustivel).toFixed(2);

console.log(calculaValor());
