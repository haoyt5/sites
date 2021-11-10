import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, id }) => (
	<div className="text-center py-4" id={id}>
		<h3>{title}</h3>
	</div>
);

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

const TextLink = ({ text, href }) => (
	<a
		href={href}
		className="text-success"
		rel="noreferrer"
		target={href[0] === "/" ? null : "_blank"}
	>
		{text}
	</a>
);
TextLink.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export { SectionTitle, TextLink };
