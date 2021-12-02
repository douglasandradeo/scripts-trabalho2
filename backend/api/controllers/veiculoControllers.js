const conexao = require('../../config/conexao.js');
const models = require('../models/veiculoModels.js');


module.exports = {
    veiculoGetAll,
    veiculoGetById,    
    veiculoNovo,
    veiculoEditar,
}

function veiculoGetAll(req, res) {
    console.log('Listar veiculo {M O D E L}');
    const sql = 'select * from veiculo'
    conexao.query(sql, (err, result) =>{
        if(err) console.log(err)
        res.json(result)
    }) 
    
}

function veiculoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdVeiculo(id, function(err, resposta) {
        console.log('Retorno de veiculo Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function veiculoNovo(req, res) {
    const dados = req.body
    dados.vei_codigo = null

    const sql = "insert into veiculo set ?"
    conexao.query(sql, [dados], (err, result) => {
        if(err) {
            console.log(err)
        } else {
        res.json(result)
        }
    })
}

function veiculoEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro dos veiculo...",dados);

    models.editarVeiculo(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/veiculo');
    });
}

