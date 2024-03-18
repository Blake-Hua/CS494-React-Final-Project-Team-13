/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

// import peopleData from "../data/people.json";
import asianRecipes from "../data/response.json";

export function People() {
	// const [people, setPeople] = useState([]);
	// useEffect(() => {
	//   setPeople(Object.values(peopleData));
	// }, []);
	// return (
	//   <>
	//     <Outlet />
	//     <ul className="sidebar">
	//         {people.map((person) => (
	//             <li key={person.name}>
	//                 <NavLink to={person.url}>{person.name}</NavLink>
	//             </li>
	//         ))}
	//     </ul>
	//   </>
	// );
}

export function PersonDetails() {
	// const params = useParams();
	// const personDetails = peopleData[params.personDetails];
	// return (
	//   <>
	//     <div className="mainInfo">
	//         <h2>{personDetails.name}</h2>
	//         <p>Height: {personDetails.height}</p>
	//         <p>Mass: {personDetails.mass}</p>
	//         <p>Hair Color: {personDetails.hair_color}</p>
	//         <p>Skin Color: {personDetails.skin_color}</p>
	//         <p>Eye Color: {personDetails.eye_color}</p>
	//         <p>Birth Year: {personDetails.birth_year}</p>
	//         <p>Gender: {personDetails.gender}</p>
	//         <p>
	//             Homeworld: {" "}
	//             <Link to={personDetails.homeworld}>{personDetails.homeworld}</Link>
	//         </p>
	//         <p>Films:</p>
	//         <ul>
	//         {personDetails.films.map((filmUrl) => (
	//             <li key={filmUrl}>
	//                 <Link to={filmUrl}>{filmUrl}</Link>
	//             </li>
	//         ))}
	//         </ul>
	//     </div>
	//   </>
	// )
}

// Here we want to take the sample query from asianRecipes and display the recipes inside results as cards
// We want to display the title, image, readyInMinutes, and the sourceUrl
// We want to use the image as a link to the sourceUrl
// We want to display the title as a header
// This might take multiple components/functions to accomplish such as having a RecipeCard component
export function Asian() {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		setRecipes(asianRecipes.results);
	}, []);
	return (
		<>
			<Outlet />
			<div className='recipeContainer'>
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
				<img src={recipe.image} alt={recipe.title} />
				<h2>{recipe.title}</h2>
				<p>Ready in {recipe.readyInMinutes} minutes</p>
			</a>
		</div>
	);
}
