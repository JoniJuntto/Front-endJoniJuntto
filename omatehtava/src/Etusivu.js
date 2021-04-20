import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';





function Etusivu(props) {

    const [recipes, setRecipes] = useState([]);
    const [haku, setHaku] = useState('');
    var value = '';

    const getRecipes = async () => {
        value = haku;
        const url = 'http://www.recipepuppy.com/api/?i=' + value;
        props.setHaut([...props.haut, haku]);
        console.log(props.haut)

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
                <TextField value={haku} variant='outlined' onChange={handleChange} />
                <Button style={{ marginTop: 8, marginLeft: 6 }} onClick={onSubmit} variant='contained'>Hae </Button>
            </div>
            <div style={{ marginLeft: 70, marginRight: 30 }}>
                <RecipeList recipes={recipes} />
            </div>
        </div>
    );
}

export default Etusivu;

