import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
							>
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
							>
								CRUDs
							</NavLink>
						</li>
					
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
