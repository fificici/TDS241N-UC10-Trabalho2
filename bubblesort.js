function bubbleSort(numeros) {
    let tamanho = numeros.length;
    // O loop externo percorre o array
    for (let i = 0; i < tamanho; i++) {
        let trocou = false; // Variável para monitorar se houve troca
        
        // O loop interno compara os elementos adjacentes e realiza a troca
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let num = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = num;
                trocou = true; // Se houve troca, marcamos como verdadeiro
            }
        }
        
        // Se não houve troca, o array já está ordenado
        if (!trocou) break;
    }

    return numeros;
}

let numeros = [5, 4, 3, 2, 1];
let teste = bubbleSort(numeros);
console.log(teste); // [1, 2, 3, 4, 5]

