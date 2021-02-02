import logo from './logo.svg';
import './App.css';
import react from 'react';


function Ajo(props){

  const matka = () =>{
    let alku = props.paivakirja.alku.lukema
    let loppu = props.paivakirja.loppu.lukema
    let matka = loppu - alku
    return matka
  }

  return(
    <div>
      <p>
        Nimi: {props.paivakirja.laatija}<br/>
        Rekisterinumero: {props.paivakirja.rekisterinro} <br/>
        Matka: {matka()} <br/><br/>
        Tekijä: {props.paivakirja.tekija}
        </p>
    </div>
  );
}


function App() {

  const ajopaivakirja = {
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    tekija: "Joni Juntto",

    alku: {
     lukema: "32500",
     lahtoaika: "13:30",
     paiva: "2020-01-27",
     paikka: "Ratapihantie 13, Helsinki",
    },
    
    loppu: {
     lukema: "32510",
     loppuaika: "13:50",
     paiva: "2020-06-27",
     paikka: "Hietakummuntie 1, Helsinki",
    }
  }


  return (
    <div>
      <Ajo paivakirja={ajopaivakirja}></Ajo>
    </div>
  );
}

export default App;
