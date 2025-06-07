import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {recipecontext} from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe added successfully!")
    reset();
    navigate("/recipes");

  }

  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className='block border-b outline-0 p-2'
          {...register("image")}
          type="url"
          placeholder='Recipe Image URL'
        />
        <small className='text-red-500'>Error here</small>

        <input
          className='block border-b outline-0 p-2'
          {...register("title")}
          type="text"
          placeholder='Recipe Title' />
        <small className='text-red-500'>Error here</small>

        <textarea
          className='block border-b outline-0 p-2'
          {...register("desc")}
          placeholder='Recipe Description'
        ></textarea>
        <small className='text-red-500'>Error here</small>

        <textarea
          className='block border-b outline-0 p-2'
          {...register("ingr")}
          placeholder='Recipe ingredients'
        ></textarea>
        <small className='text-red-500'>Error here</small>

        <textarea
          className='block border-b outline-0 p-2'
          {...register("inst")}
          placeholder='Recipe instructions'
        ></textarea>
        <small className='text-red-500'>Error here</small>

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

        <button className='block mt-5 bg-gray-900 px-4 py-2 rounded'>Add Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe
