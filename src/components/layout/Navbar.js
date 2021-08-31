import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Logo from "../Logo";
import PropTypes from "prop-types";

const NavButton = ({ title, href, ...props }) => (
	<Button color="link" href={href} {...props}>
		<b>{title}</b>
	</Button>
);

NavButton.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

function Navbar() {
	return (
		<Container fluid={true} className="pt-4 ">
			<Row className="d-flex align-items-center">
				<Col lg={{ offset: 1, size: 7 }}>
					<Logo />
				</Col>
				<Col lg="4">
					<NavButton
						target="_blank"
						title="Resume"
						href="/assets/pdf/KarenHao-YiTu_SoftwareEngineer.pdf"
					/>
					<NavButton title="Works" href="#" />
					<NavButton title="Contact" href="#" />
				</Col>
			</Row>
		</Container>
	);
}

export default Navbar;
