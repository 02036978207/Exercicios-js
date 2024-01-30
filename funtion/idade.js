function verificarMaiorIdade(anoNascimento) {
    if (typeof anoNascimento !== 'number') {
        return 'Ano de nascimento inválido'
    }
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anoNascimento

    if (idade >= 18) {
        return 'Maior de idade'
    }else{
        return 'Menor de Idade'
    }

}

const resultado = verificarMaiorIdade(2010)
console.log(resultado)