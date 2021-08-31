/* eslint-disable react/prop-types */
import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faYoutube,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const IconButton = ({ href, icon }) => (
	<a className="link-light p-1" href={href}>
		<FontAwesomeIcon icon={icon} />
	</a>
);

function Footer() {
	return (
		<div
			className="p-2 bg-dark text-light d-flex align-items-end"
			style={{
				position: "fixed",
				left: 0,
				bottom: 0,
				width: "100%",
				height: "3rem",
			}}
		>
			<Container className=" d-flex justify-content-between">
				<div>
					<IconButton href="https://github.com/haoyt5" icon={faGithub} />
					<IconButton
						href="https://www.linkedin.com/in/haoyikarentu/"
						icon={faLinkedin}
					/>
					<IconButton
						href="https://www.pinterest.com/karenhaoyi/graphic-design/"
						icon={faYoutube}
					/>
					<IconButton
						href="https://www.youtube.com/channel/UCLKVQ7801gi-7K-PUmOyXDg/featured?view_as=subscriber"
						icon={faPinterest}
					/>
				</div>
				<div>
					<small>Copyright ©2021 All Rights Reserved by Karen HY Tu</small>
				</div>
			</Container>
		</div>
	);
}

export default Footer;
