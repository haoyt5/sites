import React, { lazy, Suspense } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { RoundBlockLink } from "../../components/layout/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Profile = lazy(() => import("./Profile"));

const TextLink = ({ title, ...props }) => (
  <a className="text-link text-primary" target="_blank" {...props}>
    {title}
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
            <strong>Karen Tu </strong>
          </h1>
          <h3 className="mb-3">
            <strong>Software Engineer @ Bay Area, CA</strong>
          </h3>
          <div>
            I am a full-stack software engineer with over 4 years of experience
            building scalable web applications and distributed web services,
            specializing in TypeScript, React, Node/Go, and modern front-end
            architecture. I graduated from Carnegie Mellon University with an MS
            in Software Engineering in 2023. My experience includes delivering
            global security workflow features at ByteDance, developing
            enterprise-scale licensing and analytics systems at Trend Micro, and
            building a smart-home app store during my internship at Johnson
            Controls.
          </div>
          <br />
          <div>
            🎐 I am currently seeking a full-time software engineering role. If
            you think I may be a good fit, please contact me{" "}
            <RoundBlockLink
              text="contact me"
              href="/#contact"
              style={{ backgroundColor: "#6CA981" }}
            />{" "}
            at <code>karenhaoyitu@gmail.com</code>
          </div>
          <br />
          <div>
            Feel free to explore my professional{" "}
            <RoundBlockLink
              text="experience"
              style={{ backgroundColor: "#82ABCA" }}
              href="/#experience"
            />{" "}
            , browse my {" "}
            <RoundBlockLink
              style={{ backgroundColor: "#B782CA" }}
              text="projects"
              href="/#project"
            />{" "}
            and check out my <FontAwesomeIcon icon={faGithub} />{" "}
            <TextLink title="Github" href="https://github.com/haoyt5" /> and{" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <TextLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/karenhytu/"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Jumbotron;
