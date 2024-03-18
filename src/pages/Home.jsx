import React, { useState } from 'react';

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle the search action
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        console.log('Searching for:', searchTerm);
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
