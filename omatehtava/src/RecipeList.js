import React from 'react';

 function RecipeList(props){
     if (props.recipes.length === 0){
         return (<p>Ei sisältöä</p>);
     }
     return(
         <div>
             {
                 props.recipes.map(recipe =>{
                     return(
                         <div key={recipe.id}>
                             <a href={recipe.href}>{recipe.title}</a><br/>
                             <img alt='Ruokakuva' source={recipe.thumbnail}/>
                         </div>
                     );
                 })
             }
         </div>
     );
 }

 export default RecipeList;