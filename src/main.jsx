import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { People, PersonDetails } from './pages/People'
import { Planets, PlanetDetails} from './pages/Planets'
import { Films, FilmDetails} from './pages/Films'
import { Root } from './Root'
import { ErrorPage } from './pages/Error'

import SearchResults from './pages/SearchResults'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root><SearchResults /></Root>,
        children: [
            { index: true, element: <Home/>},
            {    
                path: "/people", 
                element: <People/>,
                children: [
                    { path: ":personDetails", element: <PersonDetails/> }
                ]
            },
            { 
                path: "/planets", 
                element: <Planets/>,
                children: [
                    { path: ":planetDetails", element: <PlanetDetails/> }
                ]            
            },
            {
                path: "/films", 
                element: <Films/>,
                children: [
                    { path: ":filmDetails", element: <FilmDetails/>}
                ]
            },
            {
                path: "/searched/:searchTerm",
                element: <SearchResults/>
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)