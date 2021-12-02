const conexao = require('../../config/conexao.js');

module.exports = {
    getAllVeiculo,
    getByIdVeiculo,  
    editarVeiculo 
}

function getAllVeiculo (callback) {
    conexao.query('select * from veiculo', callback)

}

function getByIdVeiculo (id, callback) {
    conexao.query('select * from veiculo WHERE vei_codigo = ' + id, callback)
}

function editarVeiculo(dados, callback) {
    console.log('Estou alterando o veiculo { M O D E L } .......' + dados);

    var msql = "UPDATE veiculo SET vei_marca = '" + dados.vei_marca + 
    "' , vei_modelo      = '" + dados.vei_modelo + 
    "' , vei_cor         = '" + dados.vei_cor + 
    "' , vei_placa     = '" + dados.vei_placa + 
    "' , vei_nrovaga     = '" + dados.vei_nrovaga + 
    "' , est_codigo     = '" + dados.est_codigo +
    "' WHERE vei_codigo  = '" + dados.vei_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}