import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const TextLink = ({ title, ...props }) => (
	<a className="text-success" target="_blank" {...props}>
		<b>{title}</b>
	</a>
);
TextLink.propTypes = {
	title: PropTypes.string.isRequired,
};
function Jumbotron() {
	return (
		<Row className="w-100">
			<Col
				lg={{ offset: 1, size: 3 }}
				className="d-flex align-items-center justify-content-center"
			>
				<div style={{ width: "200px" }}>
					<img
						src="/assets/img/karen_profile.png"
						className="img-fluid rounded"
						alt="..."
					/>
				</div>
			</Col>
			<Col lg="7" className="text-dark">
				<h1 className="display-4">
					<strong>Hello, I&apos;m Karen</strong>
				</h1>

				<h3 className="text-secondary py-3" style={{ lineHeight: 1.5 }}>
					I&apos;m a{" "}
					<b className="text-dark text-highlight">software engineer</b> focusing
					on front-end development with 2 years of professional experience.
				</h3>
				<h5>
					I am currently open to{" "}
					<b className="bg-success text-light">SDE internship opportunities</b>{" "}
					💫 .
				</h5>
				<h5>
					Feel free to view my{" "}
					<TextLink
						href="https://www.linkedin.com/in/haoyikarentu/"
						rel="noreferrer"
						title="LinkedIn"
					></TextLink>{" "}
					profile, download my updated{" "}
					<TextLink
						href="/assets/pdf/KarenHao-YiTu_SoftwareEngineer.pdf"
						download
						title="resume"
					></TextLink>{" "}
					, or checkout my{" "}
					<TextLink
						href="https://github.com/haoyt5"
						title="latest work"
					></TextLink>
					.
				</h5>
			</Col>
		</Row>
	);
}

export default Jumbotron;
