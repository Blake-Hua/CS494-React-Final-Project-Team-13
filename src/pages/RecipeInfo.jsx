import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const API_KEY = import.meta.env.VITE_API_KEY;

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const RecipeHeader = styled.div`
    text-align: center;

	
`;

const RecipeContent = styled.div`

    display: flex;
    margin-top: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    &:first-child {
        flex: 2;
    }
    // No longer need adjustments for last child here since IngredientsColumn takes care of it
`;


const RecipeImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;

const IngredientsColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ScrollableListContainer = styled.div`
    max-height: 500px; // Adjust based on your needs
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px; // Adjust the gap between ingredients as needed

        li {
            flex: 1 1 calc(50% - 10px); // Ensures two-column layout for list items
            word-wrap: break-word;
            hyphens: auto;
        }
    }
`;

const InstructionsList = styled.ol`
    list-style-position: inside;
`;

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
        setInstructions(response.data.analyzedInstructions[0]?.steps || []);
    }

    useEffect(() => {
        fetchData();
    }, [recipeid]);

	return (
		<RecipeContainer>
			<RecipeHeader>
				<h1>{recipe.title}</h1>
				<RecipeImage src={recipe.image} alt={recipe.title} />
			</RecipeHeader>
			<RecipeContent>
				<Column>
					<h2>Summary</h2>
					<div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
					<h2>Instructions</h2>
					<InstructionsList>
						{instructions.map((instruction) => (
							<li key={instruction.number}>{instruction.step}</li>
						))}
					</InstructionsList>
					<a href={recipe.sourceUrl}>View Full Recipe</a>
				</Column>
				<IngredientsColumn>
					<h2>Ingredients</h2>
					<ScrollableListContainer>
						<ul>
							{ingredients.map((ingredient, index) => (
								<li key={index}>{ingredient.original}</li>
							))}
						</ul>
					</ScrollableListContainer>
				</IngredientsColumn>
			</RecipeContent>
		</RecipeContainer>
	);
	
}
