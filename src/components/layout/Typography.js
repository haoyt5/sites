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

export { SectionTitle };
