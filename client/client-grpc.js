const grpc = require('grpc')
const PROTO_PATH = '../notes.proto'
const CalcService = grpc.load(PROTO_PATH).CalcService

const client = new CalcService('localhost:3000',
    grpc.credentials.createInsecure())
    
module.exports = client