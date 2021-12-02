const controller = require('../controllers/estacionamentoControllers.js');

server.get('/estacionamento', controller.estacionamentoGetAll)
server.get('/estacionamento/:codigo', controller.estacionamentoGetById)

server.put('/estacionamento/:codigo', controller.estacionamentoEditar)
server.post('/estacionamento', controller.estacionamentoNovo)

