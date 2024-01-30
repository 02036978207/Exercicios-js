function calcularDesconto(valorOriginal) {
    if (typeof valorOriginal !== 'number'){
        return 'Não é um número'
    }

    const desconto = valorOriginal * 0.05
    return desconto
}

    const valorDesconto = calcularDesconto(100)
    console.log(valorDesconto)