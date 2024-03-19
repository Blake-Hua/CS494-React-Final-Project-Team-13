/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

// Here we want to take the sample query from asianRecipes and display the recipes inside results as cards
// We want to display the title, image, readyInMinutes, and the sourceUrl
// We want to use the image as a link to the sourceUrl
// We want to display the title as a header
// This might take multiple components/functions to accomplish such as having a RecipeCard component

// turn this url into an axois GET request https://api.spoonacular.com/recipes/complexSearch?apiKey=c062a555de194d4d824cac22bc0a4d2e&query=asian&number=5
// make sure to break the query params into an object and use the object in the get request
export function GetCards(props) {
	let query = props.myQuery;
	console.log("query here", query);
	const [recipes, setRecipes] = useState([]);

	async function fetchData() {
		const response = await axios.get(
			"https://api.spoonacular.com/recipes/complexSearch",
			{
				params: {
					apiKey: API_KEY,
					query: query,
					number: 15,
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

// when the card is clicked navigate to /recipe/:recipeid where recipeid is the id of the recipe

function RecipeCard({ recipe }) {
	return (
		<div className='recipeCard'>
			<Link to={`/recipe/${recipe.id}`}>
				<a href={recipe.sourceUrl}>
					<img className='recipeImage' src={recipe.image} alt={recipe.title} />
					<h2 className='recipeTitle'>{recipe.title}</h2>
				</a>
			</Link>
		</div>
	);
}
