const conexao = require('../../config/conexao.js');

module.exports = {
    getAllEstacionamento,
    getByIdEstacionamento,  
    editarEstacionamento 
}

function getAllEstacionamento (callback) {
    conexao.query('select * from estacionamento', callback)

}

function getByIdEstacionamento (id, callback) {
    conexao.query('select * from estacionamento WHERE est_codigo = ' + id, callback)
}

function editarEstacionamento(dados, callback) {
    console.log('Estou alterando o estacionamento { M O D E L } .......' + dados);

    var msql = "UPDATE estacionamento SET est_descricao = '" + dados.est_descricao + 
    "' , est_endereco      = '" + dados.est_endereco + 
    "' , est_vagas         = '" + dados.est_vagas + 
    "' , est_dataabertura     = '" + dados.est_dataabertura + 
    "' WHERE est_codigo  = '" + dados.est_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}