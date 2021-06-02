import React from "react";
import PropTypes from "prop-types";

export const Footer = props => {
	return (
		<footer className="d-flex bg-dark border-0 p-4  justify-content-center">
			<blockquote className="blockquote">
				<p className="mt-5 mb-0 text-light text-align-center h4">
					{props.quoteText}
				</p>
				<footer className="blockquote-footer text-light">
					{props.quotePerson}
					<cite title="Source Title"> {props.quoteSource}</cite>
				</footer>
			</blockquote>
		</footer>
	);
};

Footer.propTypes = {
	quoteText: PropTypes.string,
	quotePerson: PropTypes.string,
	quoteSource: PropTypes.string
};