/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

// import asianRecipes from "../data/response.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export function People() {}

export function PersonDetails() {}

// Here we want to take the sample query from asianRecipes and display the recipes inside results as cards
// We want to display the title, image, readyInMinutes, and the sourceUrl
// We want to use the image as a link to the sourceUrl
// We want to display the title as a header
// This might take multiple components/functions to accomplish such as having a RecipeCard component

// turn this url into an axois GET request https://api.spoonacular.com/recipes/complexSearch?apiKey=c062a555de194d4d824cac22bc0a4d2e&query=asian&number=5
// make sure to break the query params into an object and use the object in the get request
export function Asian() {
	const [recipes, setRecipes] = useState([]);

	async function fetchData() {
		const response = await axios.get(
			"https://api.spoonacular.com/recipes/complexSearch",
			{
				params: {
					apiKey: API_KEY,
					query: "asian",
					number: 10,
				},
			}
		);
		setRecipes(response.data.results);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className='recipeCardContainer'>
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>
		</>
	);
}

function RecipeCard({ recipe }) {
	return (
		<div className='recipeCard'>
			<a href={recipe.sourceUrl}>
				<img className='recipeImage' src={recipe.image} alt={recipe.title} />
				<h2 className='recipeTitle'>{recipe.title}</h2>
			</a>
		</div>
	);
}
