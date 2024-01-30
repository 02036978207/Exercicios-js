function verificarParidade(numero) {
    if (typeof numero !== 'number') {
        return 'Não é um número.'
    }

    if (numero % 2 === 0) {
        return 'par'
    }else {
        return 'impar'
    }
}

console.log(verificarParidade(4))
console.log(verificarParidade(7))
console.log(verificarParidade(0))
console.log(verificarParidade(-5))
console.log(verificarParidade('texto'))
