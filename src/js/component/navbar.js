import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<div className="d-flex align-items-center p-3 ml-4">
				<img
					style={{ width: "50px", height: "50px" }}
					src="https://images.vexels.com/media/users/3/144106/isolated/preview/f57f7350848d524b407f36562f063f53-lightbulb-doodle-icon-by-vexels.png"></img>
			</div>
			<ul className="nav p-1 m-3 align-items-center">
				<li className="nav-item mx-1 h3">
					<a className="nav-link active" aria-current="page" href="#">
						Home
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						About
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						Products
					</a>
				</li>
				<li className="nav-item mx-2 h4">
					<a className="nav-link text-dark" href="#">
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
};