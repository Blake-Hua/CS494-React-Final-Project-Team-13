import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { SearchBar } from "../components/SearchBar";

function SearchResults() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

    const getSearched = async (name) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`, {
                // params: {
                //     apiKey: import.meta.env.VITE_APP_KEY,
                //     query: name,
                // },
            });
            setSearchedRecipes(response.data.results);
            console.log(response.data);
            console.log(name);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getSearched(params.searchTerm);
    }, [params.searchTerm]);


// <Link to={`/recipe/${recipe.id}`}>
//     <h2>{recipe.title}</h2>
// </Link>

    return (
        <>
        <SearchBar/>
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id} img = {item.image}>
                        {/* <img src={item.image} alt={item.title}/> */}
                        <Link to={`/recipe/${item.id}`}>
                            <h4>{item.title}</h4>
                            {/* <p>{item.summary}</p> */}
                        </Link>
                    </Card>
                );
            })}
        </Grid>
        </>
    );
}

const Grid = styled.div`
    padding-left: 10rem;
    padding-right: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div(props => ({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundImage: `url(${props.img})`,
    width: '100%',
    borderRadius: '1rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken',

    a: {
        textDecoration: 'none',
        height: '100%',
    },

    h4: {
        fontSize: '1.25rem',
        color: 'white',
        textAlign: 'center',
        padding: '2.5rem',
    },

    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Horizontal offset, vertical offset, blur radius, spread radius, color */',
    transition: '0.3s; /* Smooth transition for hover effect */',
    '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19); /* Larger shadow for hover effect */',
    },

}));

export default SearchResults;
