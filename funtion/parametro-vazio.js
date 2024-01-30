function somarDoisParametros(parametro1, parametro2) {

if (parametro1 === '' || parametro2 === '') {
    return 0;
}

const soma = Number(parametro1) + Number(parametro2)

return soma;
}

const resultado = somarDoisParametros(5, 3)
console.log(resultado)

const resultadoComVazio = somarDoisParametros('', 3)
console.log(resultadoComVazio)