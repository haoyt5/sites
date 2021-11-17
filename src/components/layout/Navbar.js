import React, { lazy, Suspense } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import HamburgerBar from "./HamburgerBar";
import PropTypes from "prop-types";
import * as config from "../../utility/config.json";

const Logo = lazy(() => import("../Logo"));

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
	const { nav } = config.default;
	return (
		<Container fluid={true} className="py-2  bg-white fixed-top ">
			<Row className="d-flex flex-row align-items-center ">
				<Col lg={{ offset: 1, size: 5 }} md={5} sm={6} xs={4}>
					<Suspense fallback={<span>...</span>}>
						<Logo />
					</Suspense>
				</Col>
				<Col
					lg={{ size: 5 }}
					md={7}
					sm={6}
					xs={8}
					className="d-flex justify-content-end"
				>
					{nav.map((item) => (
						<NavButton
							className="lg-navbar"
							key={item.url}
							title={item.name}
							href={item.url}
							target={item.target ? "_blank" : null}
						/>
					))}
					<HamburgerBar nav={nav} />
				</Col>

				<Col lg={{ size: 1 }} md="0" sm="0"></Col>
			</Row>
		</Container>
	);
}

export default Navbar;
