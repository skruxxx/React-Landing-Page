import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card my-5 border-0" style={{ width: "30%" }}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.cardContent}</p>
			</div>
			<div className="card-footer text-muted bg-light">
				<a className="btn bg-info text-light" href={props.btnUrl}>
					{props.btnLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	cardContent: PropTypes.string,
	btnLabel: PropTypes.string,
	btnUrl: PropTypes.string
};