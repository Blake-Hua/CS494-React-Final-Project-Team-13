import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useParams} from "react-router-dom"

import filmData from "../data/films.json"

export function Films() {
    // const [films, setFilms] = useState([])

    // useEffect(() => {
    //     setFilms(Object.values(filmData))
    // }, [])

    // return(
    //     <>
    //     <Outlet />
    //         <ul className="filmSidebar">
    //             {films.map((film) => (
    //                 <li key={film.title}>
    //                     <NavLink to={film.url}>{film.title}</NavLink>
    //                 </li>
    //             ))}
    //         </ul>
    //     </>
    // )
}

export function FilmDetails() {
    // const params = useParams()
    // const filmDetails = filmData[params.filmDetails]

    // return (
    //     <>
    //         <div className="mainInfo">
    //             <h2>{filmDetails.title}</h2>
    //             <p>Episode ID: {filmDetails.episode_id}</p>
    //             <p>Opening Crawl: {filmDetails.opening_crawl}</p>
    //             <p>Director: {filmDetails.director}</p>
    //             <p>Producer: {filmDetails.producer}</p>
    //             <p>Release Date: {filmDetails.release_date}</p>
    //             <p>
    //                 Characters:
    //                 <ul>
    //                     {filmDetails.characters.map((characterUrl) => (
    //                         <li key={characterUrl}>
    //                             <Link to={characterUrl}>{characterUrl}</Link>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </p>
    //             <p>
    //                 Planets:
    //                 <ul>
    //                     {filmDetails.planets.map((planetUrl) => (
    //                         <li key={planetUrl}>
    //                             <Link to={planetUrl}>{planetUrl}</Link>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </p>
    //         </div>
    //     </>
    // )
}