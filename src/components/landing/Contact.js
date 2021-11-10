import React from "react";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { SectionTitle } from "../layout/Typography";
import PropTypes from "prop-types";

const SocialLink = ({ href, icon }) => (
	<a
		style={{ fontSize: "1.35rem" }}
		target="_blank"
		className="px-2 link-dark"
		href={href}
		rel="noreferrer"
	>
		<FontAwesomeIcon icon={icon} />
	</a>
);

SocialLink.propTypes = {
	icon: PropTypes.object.isRequired,
	href: PropTypes.string.isRequired,
};

function Experience() {
	return (
		<div>
			<SectionTitle title="Contact Me 📮" id="contact" />
			<div
				style={{
					padding: "50px 0",
					background:
						"linear-gradient(90deg, rgba(223,225,198,1) 0%, rgba(208,223,209,1) 100%)",
				}}
			>
				<Row className="text-left">
					<Col lg={{ size: "6", offset: "3" }}>
						<h5>
							Feel free to reach out via email at karenhaoyitu@gmail.com or on
							social media whether you have questions or want to say hi. 🙂{" "}
						</h5>
					</Col>
				</Row>
				<Row className="text-center">
					<h4 className="py-2">
						<SocialLink href={"/"} icon={faLinkedinIn} />
						<SocialLink href={"/"} icon={faFacebookMessenger} />
					</h4>
					<h4>
						<Button color="success" outline>
							Send an Email
						</Button>
					</h4>
				</Row>
			</div>
		</div>
	);
}

export default Experience;
