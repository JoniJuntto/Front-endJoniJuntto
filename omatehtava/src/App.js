import './App.css';
import RecipeList from './RecipeList';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";



function App() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('');

  const getRecipes = async () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + value;

    try {
      const response = await fetch(url);
      var data = await response.json();
      console.log(data.results)
      setRecipes(data.results);
      console.log(data.results)
    } catch (error) {
      console.log('error', error);
    }

  }


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setValue(data.search);
    getRecipes();
  }




  return (
    <div className="App">
      <RecipeList recipes={recipes} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Search' name='search' ref={register} />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;

