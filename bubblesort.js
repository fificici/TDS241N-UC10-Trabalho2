function bubbleSort (numeros) {
    let tamanho = numeros.length
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if(numeros[j] > numeros[j + 1]) {
                let num = numeros[j]
                numeros [j] = numeros[j + 1]
                numeros[j + 1] = num
            }
        }
    }
    return numeros
}

let numeros = [5, 4, 3, 2, 1]
let teste = bubbleSort(numeros)

console.log(teste)