import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => (
	<div className="text-center py-4">
		<h3>{title}</h3>
	</div>
);

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export { SectionTitle };
