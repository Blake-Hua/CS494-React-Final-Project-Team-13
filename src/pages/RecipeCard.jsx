import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const API_KEY = import.meta.env.VITE_API_KEY;

export function GetCards(props) {
    let query = props.myQuery;
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
    }, [query]);

    return (
        <Grid>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </Grid>
    );
}

function RecipeCard({ recipe }) {
    return (
        <RecipeCardStyled img={recipe.image}>
            <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
            </Link>
        </RecipeCardStyled>
    );
}



const Grid = styled.div`
	padding-top: 2rem;
	padding-left: 10rem;
	padding-right: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const RecipeCardStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    border-radius: 1rem;
    transition: 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
    }

    a {
        text-decoration: none;
        color: white;
    }

    h2 {
        text-align: center;
        padding: 4rem;
    }
`;