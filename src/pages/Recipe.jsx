import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {


    const getRecipe = async () => {
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


}