import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';




function Etusivu(props) {


    const [recipes, setRecipes] = useState([]);
    const [haku, setHaku] = useState('');
    const [viesti, setViesti] = useState('');
    const [objekti, setObjekti] = useState({haku: ''});
    var value = '';

    const getRecipes = async () => {
        value = haku;
        setObjekti({...objekti, haku: value});
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
//http://localhost:5000/haku/add
//https://webhook.site/762fdc81-e58a-438c-b308-ae2f578ff035
    const postData = async () =>{
        try{

            let result = await fetch('http://localhost:5000/haku/add',{
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    objekti: objekti
                })
            });
            console.log(haku);

            console.log('resp: ' + result);

        }catch(e){
            console.log(e);
        }
    }

    const lisaaHaku = (e) => {
        e.preventDefault();
        getRecipes();
        postData();
        tyhjenna();

    }


    const tyhjenna = () => {
        setHaku('');    
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

