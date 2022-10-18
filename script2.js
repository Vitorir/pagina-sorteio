let vetor = []
let sequence = []
let numero

function sorteio() {
    for (let index = 0; index < 60; index++) {
        vetor[index] = Math.floor(Math.random() * (60 - 1) + 1);
    }


}
console.log(vetor)
console.log(sorteio())
console.log(sequence)
// document.getElementById("resultado").innerHTML = sequence;