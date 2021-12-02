import React from "react"
import './EstacionamentoEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function EstacionamentoEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [vagas, setVagas] = useState('');
    const [dataabertura, setData] = useState('');

    const { idEstacionamento } = useParams();

    function IfCrud() {
        console.log('codigo: ' + idEstacionamento + ' - ' + idBoolean)
        if (idEstacionamento === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getEstacionamento() {
            console.log('Estacionamento: ' + idEstacionamento + ' - ' + idBoolean)
            if (idEstacionamento == 0) {
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/estacionamento/' + idEstacionamento);
                console.log(data)

                setCodigo(data[0].est_codigo);

                setDescricao(data[0].est_descricao);
                setEndereco(data[0].est_endereco);
                setVagas(data[0].est_vagas);
                setData(data[0].est_dataabertura);

            }
        }
        IfCrud();
        getEstacionamento();
    }, []);

    async function handleEstacionamento(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.est_descricao);

        try {
            if (descricao.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Estacionamento: ",codigo)
                if (codigo == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('estacionamento', data);
                } else {
                    console.log("Alteração de Registro! ",idEstacionamento)
                    await urlapi.put('/estacionamento/' + idEstacionamento, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--estacionamento" onSubmit={handleEstacionamento} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="est_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Descrição </label>
                            <input type="text" id="est_descricao" className="form-control"
                                name="est_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Endereço </label>
                            <input type="text" className="form-control"
                                name="est_endereco"
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> vagas </label>
                            <input type="text" className="form-control" name="est_vagas"
                                id="est_vagas"
                                value={vagas}
                                onChange={e => setVagas(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data Abertura </label>
                            <input type="text" className="form-control" name="est_dataabertura"
                                id="est_dataabertura"
                                value={dataabertura}
                                onChange={e => setData(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/estacionamento" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
