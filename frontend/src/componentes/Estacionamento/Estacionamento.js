import React from "react"
import './Estacionamento.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaEstacionamento";
import { useEffect, useState } from 'react';

function Estacionamento() {
  const [estacionamento, setEstacionamento] = useState([])
  
  useEffect(() => {
    urlapi.get('estacionamento')
      .then(response => response.data)
      .then(response => setEstacionamento(response));
  }, []
  )

  return (
    <>
        <div id="idEstacionamento" className="estacionamento">
          <div id="corpo_rel">
            <legend> Registros de estacionamentos cadastrados</legend>

            <div>

              <Tabela
                items={estacionamento}
                chave={'/estacionamento/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Estacionamento;

