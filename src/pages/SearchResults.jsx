import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function SearchResults() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const getSearched = async (name) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                params: {
                    apiKey: import.meta.env.VITE_APP_KEY,
                    query: name,
                },
            });
            setSearchedRecipes(response.data.results);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getSearched(params.searchTerm);
    }, [params.searchTerm]);

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.summary}</p>
                        </div>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default SearchResults;
