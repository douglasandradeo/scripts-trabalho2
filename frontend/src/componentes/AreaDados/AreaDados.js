import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Estacionamento from '../Estacionamento/Estacionamento';
import EstacionamentoEditar from '../Estacionamento/EstacionamentoEditar';

import Veiculo from '../Veiculo/Veiculo';
import VeiculoEditar from '../Veiculo/VeiculoEditar';

import './AreaDados.css';

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/estacionamento" component={Estacionamento}></Route>
        <Route exact path="/estacionamento/:idEstacionamento" component={EstacionamentoEditar}></Route>
        <Route exact path="/veiculo" component={Veiculo}></Route>
        <Route exact path="/veiculo/:idVeiculo" component={VeiculoEditar}></Route>
      </Switch>

    </div>
  );
}

