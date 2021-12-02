const controller = require('../controllers/veiculoControllers.js');

server.get('/veiculo', controller.veiculoGetAll)
server.get('/veiculo/:codigo', controller.veiculoGetById)

server.put('/veiculo/:codigo', controller.veiculoEditar)
server.post('/veiculo', controller.veiculoNovo)

