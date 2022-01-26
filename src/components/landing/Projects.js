import React from "react";
import { Row, Col } from "reactstrap";
import { SectionTitle } from "../layout/Typography";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LinkButton = ({ href, icon, text }) =>
  href && (
    <a
      href={href}
      className="btn btn-outline-dark btn-sm"
      role="button"
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} /> {}
      {text}
    </a>
  );

LinkButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
};

const ProjectCard = ({ name, demo, code, title, description, id }) => (
  <>
    <h5 className="d-flex align-items-center justify-content-between">
      <strong>{name}</strong>
      <span className="ml-auto p-2">
        <LinkButton icon={faGithub} text="Code" href={code} />{" "}
        <LinkButton icon={faGlobe} text="Demo" href={demo} />
      </span>
    </h5>
    <div
      className="d-flex align-items-center justify-content-center img-fluid"
      style={{
        backgroundColor: "#E5E5E5",
        height: "15rem",
        width: "100%",
        borderRadius: "15px",
      }}
    >
      <img src={`/assets/img/${id}_pv.png`} alt={`${id} project screenshot`} />
    </div>
    <h5 className="m-0 py-3">{title}</h5>
    <p>{description}</p>
  </>
);

ProjectCard.propTypes = {
  name: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};
function Projects({ data }) {
  const projects = data?.projects;
  return (
    <div>
      <SectionTitle title="Projects 🌷" id="project" />
      <Row>
        {projects &&
          projects.map((item) => (
            <Col key={item.id} className="col-lg-6 px-4 col-md-12">
              <ProjectCard {...item} />
            </Col>
          ))}
      </Row>
    </div>
  );
}

Projects.propTypes = {
  data: PropTypes.object,
};
export default Projects;
