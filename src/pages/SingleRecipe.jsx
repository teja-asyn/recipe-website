import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
    // const { data } = useContext(recipecontext);
    const { data, setdata } = useContext(recipecontext);
    const [favorite,setFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: recipe?.title,
            image: recipe?.image,
            chef: recipe?.chef,
            desc: recipe?.desc,
            ingr: recipe?.ingr,
            inst: recipe?.inst,
            category: recipe?.category
        }
    });

    const UpdateHandler = (recipe) => {
        const recipeindex = data.findIndex((recipe) => params?.id == recipe?.id);
        const copyRecipe = [...data];
        copyRecipe[recipeindex] = { ...copyRecipe[recipeindex], ...recipe };
        setdata(copyRecipe);
        localStorage.setItem("recipes", JSON.stringify(copyRecipe));
        toast.success("Recipe updated successfully!");

    }

    const DeleteHandler = () => {
        const filterData = data.filter((r) => r.id != params.id);
        setdata(filterData);
        localStorage.setItem("recipes", JSON.stringify(filterData));
        toast.success("Recipe deleted successfully!");
        navigate("/recipes");

    }


    const FavHandler = () => { 
         let copyFav = [...favorite]
        copyFav.push(recipe)
        setFavorite(copyFav)
        localStorage.setItem("fav", JSON.stringify(copyFav))
    };
    const UnFavHandler = () => {
       const filterfav = favorite.filter((f)=>f.id != recipe?.id);
       setFavorite(filterfav)
        localStorage.setItem("fav",JSON.stringify(filterfav))
     };

     useEffect(()=>{
        console.log("single recipe mounted");
        return()=>{console.log("single recipe unmounted")}
     },[favorite])


    console.log(recipe)

    return recipe ? (
        <div className='w-full flex'>

            <div className="relative left w-1/2 p-10">

                {favorite.find((f)=> f.id == recipe?.id) ? (<i onClick={FavHandler} className='right-[5%] pointer absolute text-3xl text-red-400 ri-heart-line'></i>):( <i onClick={UnFavHandler} className='right-[5%] pointer absolute text-3xl text-red-400 ri-heart-fill'></i>)
                }

                <h1 className='text-5xl font-black'>{recipe.title}</h1>
                <img className='p-2 h-[40vh]' src={recipe.image} alt={recipe.title} />
                <b>{recipe?.chef}</b>
                <p>{recipe?.desc}</p>
            </div>

            <form className='right w-1/2 p-2' onSubmit={handleSubmit(UpdateHandler)}>
                <input
                    className='block border-b outline-0 p-2'
                    {...register("image")}
                    type="url"
                    placeholder='Recipe Image URL'
                />


                <input
                    className='block border-b outline-0 p-2'
                    {...register("title")}
                    type="text"
                    placeholder='Recipe Title' />

                <input
                    className='block border-b outline-0 p-2'
                    {...register("chef")}
                    type="text"
                    placeholder='Chef' />
                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("desc")}
                    placeholder='Recipe Description'
                ></textarea>


                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("ingr")}
                    placeholder='Recipe ingredients'
                ></textarea>


                <textarea
                    className='block border-b outline-0 p-2'
                    {...register("inst")}
                    placeholder='Recipe instructions'
                ></textarea>

                <select
                    className='block border-b outline-0 p-2'
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                    <option value="dessert">Dessert</option>
                </select>

                <button className='block mt-5 bg-blue-900 px-4 py-2 rounded'>Update Recipe</button>
                <button onClick={DeleteHandler} className='block mt-5 bg-red-900 px-4 py-2 rounded'>Delete Recipe</button>
            </form>
        </div>
    ) : "Loading..."
}

export default SingleRecipe
