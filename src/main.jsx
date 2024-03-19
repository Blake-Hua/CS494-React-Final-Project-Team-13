import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home, People, Planets, Films, Root, PersonDetails, PlanetDetails, FilmDetails, ErrorPage} from './Routes'
import { Home } from "./pages/Home";
import { Asian } from "./pages/Asian";
import { American } from "./pages/American";
import { Mexican } from "./pages/Mexican";
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
				// children: [{ path: ":personDetails", element: <PersonDetails /> }],
			},
			{
				path: "/american",
				element: <American />,
				// children: [{ path: ":planetDetails", element: <PlanetDetails /> }],
			},
			{
				path: "/mexican",
				element: <Mexican />,
				// children: [{ path: ":filmDetails", element: <FilmDetails /> }],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
