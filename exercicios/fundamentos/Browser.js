let a = 3

global.b = 123
this.c = 456
this.d = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.C)
console.log(module.exports.C)
console.log(module.exports === this)

// criando uma variável maluca: sem var e sem let
abc = 3 // não faça isso em casa!!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}