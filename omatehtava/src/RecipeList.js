import React from 'react';

 function RecipeList(props){
     if (props.recipes.length === 0){
         return (<p>Ei sisältöä</p>);
     }

     const recipeStyle = {
        borderStyle: 'solid',
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 700,
        marginRight: 700,
        padding: 30,
     };

     const imgStyle = {
         width: 150,
         height: 150,
     };

     return(
         <div>
             {
                 props.recipes.map(recipe =>{
                     console.log(recipe)
                    var imageUrl = recipe.thumbnail.toString();
                     return(
                         <div style={recipeStyle} key={recipe.id}>
                             <a href={recipe.href}>{recipe.title}</a><br/>
                             <img style={imgStyle} src={imageUrl} alt='Ruokakuva' />
                         </div>
                     );
                 })
             }
         </div>
     );
 }

 export default RecipeList;