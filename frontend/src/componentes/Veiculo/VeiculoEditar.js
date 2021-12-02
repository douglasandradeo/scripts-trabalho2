import React from "react"
import './VeiculoEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link } from "react-router-dom";

export default function VeiculoEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [placa, setPlaca] = useState('');
    const [nrovaga, setNrovagas] = useState('');
    const [estcod, setEstcod] = useState('');

    const { idVeiculo } = useParams();

    function IfCrud() {
        console.log('codigo: ' + idVeiculo + ' - ' + idBoolean)
        if (idVeiculo === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getVeiculo() {
            console.log('Veículo: ' + idVeiculo + ' - ' + idBoolean)
            if (idVeiculo == 0) {
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/veiculo/' + idVeiculo);
                console.log(data)

                setCodigo(data[0].vei_codigo);

                setMarca(data[0].vei_marca);
                setModelo(data[0].vei_modelo);
                setCor(data[0].vei_cor);
                setPlaca(data[0].vei_placa);
                setNrovagas(data[0].vei_nrovaga);
                setEstcod(data[0].est_codigo);

            }
        }
        IfCrud();
        getVeiculo();
    }, []);

    async function handleVeiculo(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.vei_marca);

        try {
            if (marca.length === 0) {
                alert('Insira uma marca válida')
            } else {
                console.log("Codigo veículo: ",codigo)
                if (codigo == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('veiculo', data);
                } else {
                    console.log("Alteração de Registro! ",idVeiculo)
                    await urlapi.put('/veiculo/' + idVeiculo, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--veiculo" onSubmit={handleVeiculo} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="vei_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Marca </label>
                            <input type="text" id="vei_marca" className="form-control"
                                name="vei_marca"
                                value={marca}
                                onChange={e => setMarca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Modelo </label>
                            <input type="text" className="form-control" name="vei_modelo"
                                name="vei_modelo"
                                value={modelo}
                                onChange={e => setModelo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cor </label>
                            <input type="text" className="form-control" name="vei_cor"
                                id="vei_cor"
                                value={cor}
                                onChange={e => setCor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Placa </label>
                            <input type="text" className="form-control" name="vei_placa"
                                id="vei_placa"
                                value={placa}
                                onChange={e => setPlaca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Número da vaga </label>
                            <input type="text" className="form-control" name="vei_nrovaga"
                                id="vei_nrovaga"
                                value={nrovaga}
                                onChange={e => setNrovagas(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Estacionamento </label>
                            <input type="text" className="form-control" name="est_codigo"
                                id="est_codigo"
                                value={estcod}
                                onChange={e => setEstcod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/veiculo" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
