import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";



function App() {

  const paraStyle ={
    
    marginLeft: 400,
    marginRight: 400,
    marginBottom: 50,
    marginTop: 50,
    padding: 20,
    fontSize: 20,
  };
  

  const [recipes, setRecipes] = useState([]);
  var value = '';

  const getRecipes = async () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + value;

    try {
      const response = await fetch(url);
      var data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.log('error', error);
    }

  }


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    value = data.search;
    getRecipes();
  }




  return (
    <div className="App">
      <h1>Resepti haku</h1>

      <div  style={paraStyle}>
        <p>Jos jääkaapin pohjalle on jäänyt jotain ainesosaa ylimääräiseksi,</p>
        <p> voit hakea ainesosan nimellä herkullisia reseptejä, joihin sitä voit käyttää!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Search recipe with ingredient' name='search' ref={register} />
        <input type='submit' />
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

