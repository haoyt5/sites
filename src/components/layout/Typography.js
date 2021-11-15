import React from "react";
import PropTypes from "prop-types";

const RoundBlockLink = ({ text, style, href }) => (
	<a
		href={href}
		className="btn-link text-dark "
		rel="noreferrer"
		target={href[0] === "/" ? null : "_blank"}
	>
		<div
			className="d-inline-block text-center px-2 rounded-block-link"
			style={{
				...style,
				borderRadius: "15px",
				height: "1.5rem",
				lineHeight: "1.5rem",
			}}
		>
			{` ${text} `}
		</div>
	</a>
);
RoundBlockLink.propTypes = {
	text: PropTypes.string,
	style: PropTypes.object,
	href: PropTypes.string.isRequired,
};
const SectionTitle = ({ title, id }) => (
	<div className="text-center pt-5 pb-4 m-0" id={id}>
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

export { SectionTitle, TextLink, RoundBlockLink };
