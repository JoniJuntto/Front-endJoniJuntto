import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import axios from 'axios';




function Etusivu(props) {


    const [recipes, setRecipes] = useState([]);
    const [haku, setHaku] = useState('');
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


    const postData = async () =>{
        const formData = {
            data: haku
        }
        console.log(formData)
        axios.post('http://localhost:5000/haku/add',formData)
        .then(response =>{
            if(response.status === 200){
                console.log('onnistui');
            }else{
                console.log('Ei onnistunut')
            }
        })
    }

    const lisaaHaku = (e) => {
        e.preventDefault();
        getRecipes();
        postData();
        tyhjenna();

    }


    const tyhjenna = () => {
        setHaku('');    
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
                <Button style={{ marginTop: 8, marginLeft: 6 }} onClick={(e) => lisaaHaku(e)} variant='contained'>Hae </Button>
            </div>
            <div style={{ marginLeft: 70, marginRight: 30 }}>
                <RecipeList recipes={recipes} />
            </div>
        </div>
    );
}

export default Etusivu;

