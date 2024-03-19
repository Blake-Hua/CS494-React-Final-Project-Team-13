import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { GetCards } from "./RecipeCard";

export function American() {
	return (
		<>
			<GetCards myQuery='american' />
		</>
	);
}
