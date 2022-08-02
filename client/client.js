const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const client = require('./client-grpc')
rl.addListener('line', line => {
    var object  = '{"type":"message","message":"'+line+'"}';
    client.Calculadora({texto:line}, (error, resultado) => {
        if (!resultado.erro) {
            console.log(`Resultado da operação: ${resultado.valor}`)
        } else {
            console.log("Calculadora Avançada - Envie uma mensagem no formato Ex: 1+3 ou 10/2")
        }
    })
})
