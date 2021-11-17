import React, { lazy, Suspense } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { RoundBlockLink } from "../../components/layout/Typography";
const Profile = lazy(() => import("./Profile"));

const TextLink = ({ title, ...props }) => (
	<a className="text-success link-line" target="_blank" {...props}>
		<b>{title}</b>
	</a>
);

TextLink.propTypes = {
	title: PropTypes.string.isRequired,
};

function Jumbotron() {
	return (
		<div style={{ minHeight: "82vh" }}>
			<Row className="w-100 m-0 pt-jumbotron">
				<Col
					lg={{ offset: 1, size: 3 }}
					md={{ offset: 1, size: 11 }}
					sm="12"
					className="my-4 d-flex align-items-center justify-content-center p-0"
				>
					<div style={{ width: "200px" }}>
						<Suspense fallback={<span>...</span>}>
							<Profile />
						</Suspense>
					</div>
				</Col>
				<Col
					lg="7"
					md={{ offset: 1, size: 11 }}
					sm="12"
					className="text-dark text-introduction p-0"
				>
					<h1>
						<strong>Hello I am Karen Tu </strong>
					</h1>
					<h3 className="mb-3">
						<strong>Software Engineer @ Mountain View, CA</strong>
					</h3>
					<div>
						I’m currently pursuing my MS degree in software engineering at CMU
						Silicon Valley. Previously, I worked at Trend Micro at the licensing
						team for two years focusing on front-end development building
						platforms for NABU and EU sales teams and thousands of our business
						customers using React and Redux.
					</div>
					<br />
					<div>
						🎐 I am also seeking a software engineer internship(2022 summer). If
						you think I am a good fit, please{" "}
						<RoundBlockLink
							text="contact me"
							href="/#contact"
							style={{ backgroundColor: "#6CA981" }}
						/>{" "}
						at karenhaoyitu@gmail.com or haoyit@andrew.cmu.edu.
					</div>
					<br />
					<div>
						Feel free to read about my professional{" "}
						<RoundBlockLink
							text="experience"
							style={{ backgroundColor: "#82ABCA" }}
							href="/#experience"
						/>{" "}
						and{" "}
						<RoundBlockLink
							style={{ backgroundColor: "#B782CA" }}
							text="projects"
							href="/#project"
						/>
						! 🚀
					</div>

					{/* <h5>
						Feel free to view my{" "}
						<TextLink
							href="https://www.linkedin.com/in/karenhytu/"
							rel="noreferrer"
							title="LinkedIn"
						></TextLink>{" "}
						profile, download my updated{" "}
						<TextLink
							href="/assets/resume/Resume_KarenHYTu.pdf"
							download
							title="resume"
						></TextLink>{" "}
						, or checkout my{" "}
						<TextLink
							href="https://github.com/haoyt5"
							title="latest work"
							rel="noreferrer"
						></TextLink>
						.
					</h5> */}
				</Col>
			</Row>
		</div>
	);
}

export default Jumbotron;
