import React, { lazy, Suspense } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
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
	return (
		<Container fluid={true} className="pt-4">
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
					<NavButton title="Experience" href="/#experience" />
					<NavButton title="Projects" href="/#project" />
					<NavButton
						target="_blank"
						title="Resume"
						href="/assets/resume/Resume_KarenHYTu.pdf"
					/>
					{/* <NavButton title="Works" href="#" /> */}
					<NavButton title="Contact" href="mailto:karenhaoyitu@gmail.com" />
				</Col>
				<Col lg={{ size: 1 }} md="0" sm="0"></Col>
			</Row>
		</Container>
	);
}

export default Navbar;
