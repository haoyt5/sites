import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Logo from "../Logo";

function Navbar() {
	return (
		<Container fluid={true} className="pt-4 ">
			<Row className="d-flex align-items-center">
				<Col lg={{ offset: 1, size: 7 }}>
					<Logo />
				</Col>
				<Col lg="4">
					<Button color="link">Works</Button>
					<Button color="link">Resume</Button>
					<Button color="link">Contact</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Navbar;
