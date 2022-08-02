const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')
const server = new grpc.Server();

const calc = s => Function(`return(${s})`)();

function calculadoraAvancada(point) {
    try {
        let resultado = calc(point.texto)
        feature = {
          valor: resultado,
          erro: false
        };
        return feature;
    } catch (error) {
        console.log("catch")
        feature = {
            valor: 0,
            erro: true
          };
          return feature;
    }

}

function Calcula(call, callback) {
    callback(null, calculadoraAvancada(call.request));
}

server.addService(notesProto.NoteService.service, {
    Calculadora:Calcula,
})

server.bind('127.0.0.1:3000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:3000')
server.start()