import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import axios from 'axios';




function Etusivu(props) {


    const [recipes, setRecipes] = useState([]);
    const [haku, setHaku] = useState({teksti: ''});
    const [viesti, setViesti] = useState('');
    var value = '';

    const getRecipes = async () => {
        value = haku;
        const url = 'http://www.recipepuppy.com/api/?i=' + value;

        try {
            const response = await fetch(url);
            var data = await response.json();
            setRecipes(data.results);
        } catch (error) {
            console.log('error', error);
        }

    }


    const handleChange = e => {
        setHaku(e.target.value)
    };

    const onSubmit = (data) => {
        value = data.search;
        getRecipes();

    }

    const lisaaHaku = (e) => {
        e.preventDefault();

        getRecipes();
        
        const formData = {
            teksti: haku.teksti
          }
    


    axios.post('http://localhost:5000/haku/add', formData)
    .then(response => {
        if (response.status === 200) {
            setHaku({
                teksti: ''
            });
            setViesti('Lisättiin');
        } else {
            setViesti('Lisäys ei onnistunut');
          }
    })}


    const tyhjenna = (e) => {
        e.preventDefault();
    
        setHaku({
            teksti: ''
        });
    
        setViesti('');
      }


    return (
        <div className="App">

            <Typography variant="h3" component="h2" style={{ marginTop: 30, marginBottom: 30 }}>
                Reseptihaku!
        </Typography>

            <Typography variant='h5' component='p' style={{ marginTop: 30, marginBottom: 30 }}>
                Jos jääkaapin pohjalle on jäänyt jotain ainesosaa ylimääräiseksi,
                voit hakea ainesosan nimellä herkullisia reseptejä, joihin sitä voit käyttää!
      </Typography>

            <div style={{ marginTop: 50, marginBottom: 60 }}>
                <TextField value={haku.teksti} variant='outlined' onChange={handleChange} />
                <Button style={{ marginTop: 8, marginLeft: 6 }} onClick={(e) => lisaaHaku(e)} variant='contained'>Hae </Button>
                <Button onClick={ (e) => tyhjenna(e) } variant='contained' color='secondary'>Tyhjennä</Button>
            </div>
            <div style={{ marginLeft: 70, marginRight: 30 }}>
                <RecipeList recipes={recipes} />
            </div>
        </div>
    );
}

export default Etusivu;

