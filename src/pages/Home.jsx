import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle the search action
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        navigate(`/search/${searchTerm}`); // Navigate to the search page
        console.log('Searching for:', searchTerm);
        
		console.log("api key: ", import.meta.env.VITE_APP_KEY);

        // const apiKey = import.meta.env.VITE_APP_KEY;

		// // Send the search term to the API
		// axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`, {
		// 	params: {
		// 		query: searchTerm,
		// 	},
		// });

        // console.log(recipes.results)
    };

    return (
        <>
            <h1 className="title">Find new recipes from around the world</h1>
            <form onSubmit={handleSearch} className="searchForm">
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Search for a recipe..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </>
    );
}
