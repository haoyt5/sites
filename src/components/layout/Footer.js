import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faYoutube,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const IconLink = ({ href, icon }) => (
	<a
		style={{ fontSize: "1.35rem" }}
		target="_blank"
		className="link-light px-1"
		href={href}
		rel="noreferrer"
	>
		<FontAwesomeIcon icon={icon} />
	</a>
);
IconLink.propTypes = {
	icon: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};
function Footer() {
	return (
		<div
			className="pb-5 bg-dark text-light d-flex align-items-end "
			style={{
				position: "fixed",
				left: 0,
				bottom: 0,
				width: "100%",
				height: "6rem",
			}}
		>
			<Container fluid={true}>
				<Row className="w-100">
					<Col lg={{ offset: 1, size: 2 }}>
						<IconLink href="https://github.com/haoyt5" icon={faGithub} />
						<IconLink
							href="https://www.linkedin.com/in/haoyikarentu/"
							icon={faLinkedin}
						/>
						<IconLink
							href="https://www.pinterest.com/karenhaoyi/graphic-design/"
							icon={faYoutube}
						/>
						<IconLink
							href="https://www.youtube.com/channel/UCLKVQ7801gi-7K-PUmOyXDg/featured?view_as=subscriber"
							icon={faPinterest}
						/>
					</Col>
					<Col lg={{ offset: 6, size: 3 }}>
						<small>Copyright ©2021 All Rights Reserved by Karen HY Tu</small>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
