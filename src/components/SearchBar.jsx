import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/searched/${searchTerm}`);
    };

    return (
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
    );
};
