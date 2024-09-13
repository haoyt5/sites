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
            I am a software engineer with 3 years of professional experience in
            web development, specializing in JavaScript, Express, and React. I
            recently graduated from Carnegie Mellon University in 2023 with an
            MS in Software Engineering. Prior to that, I interned at Johnson
            Controls on the cloud team during the summer of 2022 and worked at
            Trend Micro for two years on the licensing team.
          </div>
          <br />
          <div>
            🎐 I am currently seeking for a full-time software development
            engineer position. If you think I am a good fit, please{" "}
            <RoundBlockLink
              text="contact me"
              href="/#contact"
              style={{ backgroundColor: "#6CA981" }}
            />{" "}
            at <code>karenhaoyitu@gmail.com</code>
          </div>
          <br />
          <div>
            Feel free to read about my professional{" "}
            <RoundBlockLink
              text="experience"
              style={{ backgroundColor: "#82ABCA" }}
              href="/#experience"
            />{" "}
            ,{" "}
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
