Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Na média, precisa melhorar')
    } else if (nota.entre (0, 3.99)) {
        console.log('se ferrou, precisa estudar mais')
    } else {
        console.log('Nota não reconhecida')
    }
}


imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)