import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export function Root(props) {
	const { children } = props;
	return (
		<>
			<nav>
				<ul>
					<nav className='homeNav'>
						<p>
							<NavLink to='/'>Flavor Quest</NavLink>
						</p>
					</nav>
					<nav className='threeNav'>
						<p>
							<NavLink to='/asian'>Asian</NavLink>
						</p>
						<p>
							<NavLink to='/planets'>American</NavLink>
						</p>
						<p>
							<NavLink to='/films'>Mexican</NavLink>
						</p>
						{/* <p><NavLink to="/">Search</NavLink></p> */}
					</nav>
				</ul>
			</nav>
			<main>{children || <Outlet />}</main>
		</>
	);
}
