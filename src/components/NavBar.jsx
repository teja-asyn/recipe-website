import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-x-10 p-4 font-semibold mb-10'>
                <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/">Home</NavLink>
                <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/recipes">Recipes</NavLink>
                <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>
                <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/create-recipe">CYOR</NavLink>
                <NavLink className={(e) => e.isActive ? "text-red-300" : ""} to="/fav">Favorites</NavLink>
            </div>
        </div>
    )
}

export default NavBar
