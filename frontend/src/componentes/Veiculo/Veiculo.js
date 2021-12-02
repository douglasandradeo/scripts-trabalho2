import React from "react"
import './Veiculo.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaVeiculo";

import { useEffect, useState } from 'react';

function Veiculo() {
  const [veiculo, setVeiculo] = useState([])
  
  useEffect(() => {
    urlapi.get('veiculo')
      .then(response => response.data)
      .then(response => setVeiculo(response));
  }, []
  )

  return (
    <>
        <div id="idVeiculo" className="veiculo">
          <div id="corpo_rel">
            
            <legend> Registros de veículos cadastrados</legend>

            <div>

              <Tabela
                items={veiculo}
                chave={'/veiculo/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Veiculo;

