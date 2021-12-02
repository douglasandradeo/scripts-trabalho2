import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {


      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.est_codigo}>
          <td> {item.est_codigo} </td>
          <td> {item.est_descricao} </td>
          <td> {item.est_endereco} </td>
          <td> {item.est_vagas} </td>
          <td> {item.est_dataabertura} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.est_codigo} > Editar </a></td>
          <td> <Link to={props.chave + item.est_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td id="deletar"> <a className="btn btn-primary btn-danger" href={props.chave + item.est_codigo} > Deletar </a></td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Endereço </th>
            <th scope="col"> Número de vagas </th>
            <th scope="col"> Data abertura </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Estacionamento</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}