import React from "react";

export const Welcome = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div
				className="d-flex flex-column align-items-center justify-content-center"
				style={{
					backgroundImage: `url("https://i.imgur.com/3DnQRMc.jpg")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "100vh"
				}}>
				<div className="d-flex flex-column text-light justify-content-center align-items-center">
					<p className="display-1">Welcome to enLightening</p>
					<p className="display-4">A Home of Light and Imagination</p>
				</div>
				<button type="button" className="btn btn-info mt-5 px-4 py-3">
					<p className="p-0 display-4">Discover Your Light</p>
				</button>
			</div>
		</div>
	);
};