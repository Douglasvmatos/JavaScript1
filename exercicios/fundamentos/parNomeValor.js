// par nome/Valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaaa' // contexto léxico 2
    return saudacao 
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Almir Jeferson',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)