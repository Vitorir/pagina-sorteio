let numeros = [];
let sequencia = [];

function gerarIntAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (let index = 0; index < 60; index++) {
    numeros[index] = gerarIntAleatorio(10, 99); // pega um numero aleatorio entre 10 e 99
}


for (let index = 0; index < 6; index++) {
    sequencia[index] = numeros[gerarIntAleatorio(0, 60)];
}

console.log(numeros.length)
console.log(numeros)

console.log(sequencia)