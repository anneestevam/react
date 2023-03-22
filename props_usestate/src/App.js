import "./App.css";
import { useState } from "react";
import CardAnimal from "./componentes/CardAnimal";
import CardInformacoes from "./componentes/CardInformacoes";
import Topo from './componentes/Topo';

export default function App() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    tipoDoComponenteCard === 'cachorro' ? setTipoDoComponenteCard('gato') : setTipoDoComponenteCard('cachorro');
  }

  return (
    <div className="App">
      <Topo clickAlterarAnimal={alterarState} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}