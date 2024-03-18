import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home, People, Planets, Films, Root, PersonDetails, PlanetDetails, FilmDetails, ErrorPage} from './Routes'
import { Home } from "./pages/Home";
import { Asian, People, PersonDetails } from "./pages/Asian";
import { Planets, PlanetDetails } from "./pages/Planets";
import { Films, FilmDetails } from "./pages/Films";
import { Root } from "./Root";
import { ErrorPage } from "./pages/Error";

import "./index.css";

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
				children: [{ path: ":personDetails", element: <PersonDetails /> }],
			},
			{
				path: "/planets",
				element: <Planets />,
				children: [{ path: ":planetDetails", element: <PlanetDetails /> }],
			},
			{
				path: "/films",
				element: <Films />,
				children: [{ path: ":filmDetails", element: <FilmDetails /> }],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
