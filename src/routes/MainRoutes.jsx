import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotFound from '../../PageNotFound'
import Fav from '../pages/Fav'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/details/:id" element={<SingleRecipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="*" element={<PageNotFound/>} />
              {/*wild card route for 404*/}
            <Route path="/fav" element={<Fav/>} />

        </Routes>
    )
}

export default MainRoutes
