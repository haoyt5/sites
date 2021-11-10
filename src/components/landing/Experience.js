import React from "react";
import { Row } from "reactstrap";
import { SectionTitle } from "../layout/Typography";
import { formatDate } from "../../utility/common";
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
const JobBlock = ({ item }) => (
	<div className="d-flex">
		<div className="job-company">
			<h5 className="text-success">
				<strong>{item.company}</strong>
			</h5>
		</div>
		<div className="job-description">
			<h5>
				<strong>{item.title}</strong>
			</h5>
			<h6 className="text-muted">
				{formatDate(item.start_date)} — {formatDate(item.end_date)}
			</h6>
			<p className="m-0 text-main">{item.sub_title}</p>
			<p></p>
		</div>
	</div>
);

JobBlock.propTypes = {
	item: PropTypes.object,
};
function Experience({ data }) {
	const education = data?.education;
	const professional = data?.professional;
	return (
		<div>
			<SectionTitle title="Experience 🎒" id="experience" />
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
				{professional &&
					professional.map((item) => <JobBlock key={item.id} item={item} />)}
			</Row>
		</div>
	);
}

Experience.propTypes = {
	data: PropTypes.object,
};

export default Experience;
