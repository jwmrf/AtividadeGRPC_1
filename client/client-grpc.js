const grpc = require('grpc')
const PROTO_PATH = '../notes.proto'
const NoteService = grpc.load(PROTO_PATH).NoteService

const client = new NoteService('localhost:3000',
    grpc.credentials.createInsecure())
    
module.exports = client