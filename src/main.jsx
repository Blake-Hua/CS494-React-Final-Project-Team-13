import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import { Home, People, Planets, Films, Root, PersonDetails, PlanetDetails, FilmDetails, ErrorPage} from './Routes'
import { Home } from "./pages/Home";
import { Asian } from "./pages/Asian";
import { American } from "./pages/American";
import { Mexican } from "./pages/Mexican";
import { RecipeInfo } from "./pages/RecipeInfo";
import { Root } from "./Root";
import { ErrorPage } from "./pages/Error";

import "./index.css";

import SearchResults from './pages/SearchResults'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: (
			<Root>
				<ErrorPage />
			</Root>
		),
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/asian",
				element: <Asian />,
			},
			{
				path: "/american",
				element: <American />,
			},
			{
				path: "/mexican",
				element: <Mexican />,
			},
			{
				path: "/recipe/:recipeid",
				element: <RecipeInfo />,
			},
            {
                path: "/searched/:searchTerm",
                element: <SearchResults/>
            },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
