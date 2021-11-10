import React from "react";
import { Row, Col, Button } from "reactstrap";
import { SectionTitle } from "../layout/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Experience() {
	return (
		<div>
			<SectionTitle title="Projects 🌷" />
			<Row>
				<Col>
					<Row>
						<h4>
							<strong>Title</strong>
							<span>
								<Button size="sm">
									<FontAwesomeIcon icon={faGithub} /> Code
								</Button>{" "}
								<Button size="sm">
									<FontAwesomeIcon icon={faGlobe} /> Demo
								</Button>
							</span>
						</h4>
					</Row>
					<Row>
						<div
							style={{
								backgroundColor: "#E5E5E5",
								height: "15rem",
								width: "100%",
								borderRadius: "15px",
							}}
						></div>
					</Row>
					<Row>
						<h5>Housework Management Web App</h5>
						<p>
							HOMIE is a cloud-based app built with React, Redux, D3.js, and
							Firebase. Built member, group and task management and point reward
							feature with Firebase Authentication, Cloud Firestore, and
							Firebase Storage.
						</p>
					</Row>
				</Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</div>
	);
}

export default Experience;
