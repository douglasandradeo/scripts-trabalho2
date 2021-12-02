import './MenuBotoes.css';
import { Link } from 'react-router-dom';



export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnHome" className="btn btn-light"><Link to="/">Home</Link></button>
      <button type="button" id="btnEstacionamento" className="btn btn-light"><Link to="/estacionamento">Estacionamentos</Link></button>
      <button type="button" id="btnVeiculos" className="btn btn-light"><Link to="/veiculo">Veiculos</Link></button>

    </div>
  );
}

