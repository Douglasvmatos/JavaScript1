const pessoa = {
     saudacao: 'Bom dia',
     falar() {
         console.log(this.saudacao)
     }
} 

pessoa.falar()
const falar = pessoa.falar
falar() // conflitol entre paragimas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)
falar2()