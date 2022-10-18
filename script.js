const botaoSortear = document.querySelector("div.box button")
let sequenciaSorteada = document.querySelector("div.box h1")
let numeros = []; // roleta
let sequencia = [];


function gerarIntAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let index = 0; index < 60; index++) {
    numeros[index] = gerarIntAleatorio(10, 99); // pega um numero aleatorio entre 10 e 99
}


for (let index = 0; index < 6; index++) {
    sequencia[index] = numeros[gerarIntAleatorio(0, 60)]; // numero aleatorio pra acessar indice do vetor numeros
}


botaoSortear.addEventListener("click", () => {
    sequenciaSorteada.innerHTML = "A sequencia sorteada é: " + "[ " + sequencia + " ]"
})

console.log(numeros.length)
console.log(numeros)

console.log(sequencia)