import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useParams} from "react-router-dom"

import planetData from "../data/planets.json"

export function Planets() {
    // const [planets, setPlanets] = useState([])

    // useEffect(() => {
    //     setPlanets(Object.values(planetData))
    // }, [])

    // return (
    //     <>
    //     <Outlet />
    //         <ul className="sidebar">
    //             {planets.map((planet) => (
    //                 <li key={planet.name}>
    //                     <NavLink to={planet.url}>{planet.name}</NavLink>
    //                 </li>
    //             ))}
    //         </ul>
    //     </>
    // )
}

export function PlanetDetails() {
    // const params = useParams()
    // const planetDetails = planetData[params.planetDetails]

    // return (
    //     <>
    //         <div className="mainInfo">
    //             <h2>{planetDetails.name}</h2>
    //             <p>Rotation Period: {planetDetails.rotation_period}</p>
    //             <p>Orbital Period: {planetDetails.orbital_period}</p>
    //             <p>Diameter: {planetDetails.diameter}</p>
    //             <p>Climate: {planetDetails.climate}</p>
    //             <p>Gravity: {planetDetails.gravity}</p>
    //             <p>Terrain: {planetDetails.terrain}</p>
    //             <p>Surface Water: {planetDetails.surface_water}</p>
    //             <p>Population: {planetDetails.population}</p>
    //             <p>
    //                 Residents:
    //                 <ul>
    //                     {planetDetails.residents.map((residentUrl) => (
    //                         <li key={residentUrl}>
    //                             <Link to={residentUrl}>{residentUrl}</Link>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </p>
    //             <p>
    //                 Films:
    //                 <ul>
    //                     {planetDetails.films.map((filmUrl) => (
    //                         <li key={filmUrl}>
    //                             <Link to={filmUrl}>{filmUrl}</Link>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </p>
    //         </div>
    //     </>
    // )
}