 import React from 'react';

 function Lista(props){
     if (props.henkilot.length === 0){
         return (<p>Ei sisältöä</p>);
     }
     return(
         <div>
             {
                 props.henkilot.map(henkilo =>{
                     return(
                         <p key={henkilo.id}>
                             Nimi: {henkilo.nimi}<br/>
                             Alkaa: {henkilo.alkupaiva}<br/>
                             Loppuu: {henkilo.loppupaiva}
                         </p>
                     );
                 })
             }
         </div>
     );
 }

 export default Lista;