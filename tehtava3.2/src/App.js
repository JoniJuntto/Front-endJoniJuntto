import React from 'react';
import Lista from './Lista';

const henkilot = [
  {
  nimi: "Virtanen Matti",
  alkupaiva: "2020-06-01",
  loppupaiva: "2020-06-30",
  },
  {
  nimi: "Laaksonen Lisaa",
  alkupaiva: "2020-06-26",
  loppupaiva: "2020-07-27",
  },
  {
  nimi: "Korhonen Maija",
  alkupaiva: "2020-08-03",
  loppupaiva: "2020-08-30",
  },
 ];

 function App(){
   return(
     <Lista henkilot={ henkilot } />
   );
 };

 export default App;