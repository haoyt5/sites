import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const NavButton = ({ title, href, ...props }) => (
	<Button color="link" href={href} {...props}>
		<h2>
			<b>{title}</b>
		</h2>
	</Button>
);

NavButton.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

function HamburgerBar({ nav }) {
	const [show, setShow] = useState(false);
	return (
		<>
			<div
				className="p-1 md-navbar cursor-pointer "
				onClick={() => setShow(!show)}
			>
				<h2 className="m-0">
					<FontAwesomeIcon icon={faBars} />
				</h2>
			</div>
			<div
				className={`position-absolute zindex-popover md-navbar-popover ${
					show ? "d-block" : "d-none"
				}`}
			>
				<Container style={{ padding: "1rem 1rem" }}>
					<div className="d-inline-block">
						<div
							className="m-0 close-btn cursor-pointer p-2"
							onClick={() => setShow(!show)}
						>
							<FontAwesomeIcon icon={faXmark} />
						</div>
					</div>

					<div className="d-flex flex-column md-navbar-popover-content">
						{nav.map((item) => (
							<NavButton
								className={`nav-popover-btn hover-btn-${item.theme}`}
								key={item.url}
								title={item.name}
								href={item.url}
								target={item.target ? "_blank" : null}
								onClick={() => setShow(!show)}
							/>
						))}
					</div>
				</Container>
			</div>
		</>
	);
}

HamburgerBar.propTypes = {
	nav: PropTypes.array,
};

export default HamburgerBar;
