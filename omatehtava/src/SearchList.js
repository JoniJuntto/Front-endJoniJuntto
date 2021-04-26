import React, {useState, useEffect} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import List from './List';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 900,
        fontSize: 40
    },

});

function SearchList(props) {

    const classes = useStyles();

    const [haut, setHaut] = useState([]);
    const [virhe, setVirhe] = useState('');
    var value = '';

    const haeKaikkiHaut = async () => {
        try {
            const response = await
                fetch('http://localhost:5000/haku/all');
            const json = await response.json();
            console.log(JSON)
            setHaut(json);
            setVirhe('');
        } catch (error) {
            setHaut([]);
            setVirhe('Haku ei onnistunut');
        }
    }

    
        useEffect( () => {
            haeKaikkiHaut();
       }, [])
    
       if (virhe.length > 0) {
         return ( <Typography>{ virhe }</Typography> );
       }
    
       if (haut.length > 0) {
         return ( <List haut={ haut } /> );
       }
    
       return ( <Typography>Yhtään matkaa ei ole</Typography> );
      }
    

export default SearchList;