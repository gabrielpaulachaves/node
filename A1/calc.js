//aprendendo modulos
/*
function soma(a, b){
    return a + b

}

function subtrair(a, b){
    return a - b

}

function multiplicar(a, b){
    return a * b

}

function divisao(a, b){
    return a / b

}

console.log(soma(30, 60))
console.log(subtrair(90, 176))
console.log(multiplicar(40, 21))
console.log(divisao(83, 67))
*/
//apos passar essas funcoes para outros arquivos e exportá-los, iremos importar pra cá, usamos require() dentro de uma variavel, para que possamos passar parametros e chamar ela aqui

let div = require("./div")
let soma = require("./soma")
let mult = require("./mult")
let sub = require("./sub")

console.log(div(50, 223))
console.log(soma(45, 4313))
console.log(mult(820, 231))
console.log(sub(231, 43))
