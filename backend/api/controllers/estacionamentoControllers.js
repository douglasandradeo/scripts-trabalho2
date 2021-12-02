const conexao = require('../../config/conexao.js');
const models = require('../models/estacionamentoModels.js');


module.exports = {
    estacionamentoGetAll,
    estacionamentoGetById,    
    estacionamentoNovo,
    estacionamentoEditar,
}

function estacionamentoGetAll(req, res) {
    console.log('Listar estacionamento {M O D E L}');
    const sql = 'select * from estacionamento'
    conexao.query(sql, (err, result) =>{
        if(err) console.log(err)
        res.json(result)
    }) 
    
}

function estacionamentoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdEstacionamento(id, function(err, resposta) {
        console.log('Retorno de Estacionamento Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function estacionamentoNovo(req, res) {
    const dados = req.body
    dados.est_codigo = null

    const sql = "insert into estacionamento set ?"
    conexao.query(sql, [dados], (err, result) => {
        if(err) {
            console.log(err)
        } else {
        res.json(result)
        }
    })
}

function estacionamentoEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro dos estacionamentos...",dados);

    models.editarEstacionamento(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/estacionamento');
    });
}

