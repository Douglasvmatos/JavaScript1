const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Na média, precisa melhorar')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota não existente')
    }
}

imprimirResultado(7)
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(2.1)
imprimirResultado(11)