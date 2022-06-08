const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Jeferson',
        idade: 65,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 321
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Douglas',
        idade: 26
    }]

}

console.log(carro.condutores, carro.proprietario)

carro.proprietario.endereco.numero = 1000