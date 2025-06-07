import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
 const favorites =JSON.parse(localStorage.getItem("fav") || [])

 const  renderRecipes = favorites.map(((recipe)=><RecipeCard key={recipe.id} recipe={recipe}/>))

  return (
    <div className='flex flex-wrap'>
      {favorites.length > 0 ? renderRecipes : "No favorite recipes found"}
    </div>
  )
}

export default Fav
