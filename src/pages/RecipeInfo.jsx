/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export function RecipeInfo() {
	const { recipeid } = useParams();
	const [recipe, setRecipe] = useState({});
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	async function fetchData() {
		const response = await axios.get(
			`https://api.spoonacular.com/recipes/${recipeid}/information`,
			{
				params: {
					apiKey: API_KEY,
					includeNutrition: false,
				},
			}
		);
		setRecipe(response.data);
		setIngredients(response.data.extendedIngredients);
		setInstructions(response.data.analyzedInstructions[0].steps);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className='recipeInfoContainer'>
				<h1 className='recipeTitle'>{recipe.title}</h1>
				<img className='recipeImage' src={recipe.image} alt={recipe.title} />
				<h2 className='recipeSummary'>Summary</h2>
				{/* recipe summary should allow html syntax such as <b></b> */}
				<p
					className='recipeSummaryText'
					dangerouslySetInnerHTML={{ __html: recipe.summary }}
				></p>
				<h2 className='recipeIngredients'>Ingredients</h2>
				<ul className='recipeIngredientsList'>
					{ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient.original}</li>
					))}
				</ul>
				<h2 className='recipeInstructions'>Instructions</h2>
				<ol className='recipeInstructionsList'>
					{instructions.map((instruction) => (
						<li key={instruction.number}>{instruction.step}</li>
					))}
				</ol>
				<a href={recipe.sourceUrl}>View Full Recipe</a>
			</div>
		</>
	);
}
