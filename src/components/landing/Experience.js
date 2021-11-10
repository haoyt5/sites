import React from "react";
import { Row } from "reactstrap";
import { SectionTitle } from "../layout/Typography";
import PropTypes from "prop-types";

const EdLineItem = ({ item }) => (
	<p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.5rem" }}>
		<span className="text-success">
			<strong>{item.school},</strong> {item.location}
		</span>
		{"　"}
		<span>{item.degree}</span>{" "}
		<span className="text-muted">{item.grad_date}</span>
	</p>
);

EdLineItem.propTypes = {
	item: PropTypes.object,
};
function Experience({ data }) {
	const education = data?.education;
	console.log(education);
	return (
		<div>
			<SectionTitle title="Experience 🎒" />
			<Row>
				<h5>Education 📚</h5>
				<div className="pt-2 pb-3">
					{education &&
						education.map((item) => (
							<EdLineItem key={item.school} item={item} />
						))}
				</div>
			</Row>
			<Row>
				<h5>Professional 💻</h5>
			</Row>
		</div>
	);
}

Experience.propTypes = {
	data: PropTypes.object,
};

export default Experience;
