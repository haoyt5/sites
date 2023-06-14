import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const IconLink = ({ href, icon }) => (
  <a
    style={{ fontSize: "1.35rem" }}
    target="_blank"
    className="link-light px-1"
    href={href}
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

IconLink.propTypes = {
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div
      className="bg-dark text-light"
      style={{
        marginTop: "auto",
      }}
    >
      <Container fluid={true}>
        <Row className="w-100 d-flex align-items-center">
          <Col
            className="py-1"
            lg={{ offset: 1, size: 2 }}
            md={{ offset: 1, size: 11 }}
            sm="12"
          >
            <IconLink href="https://github.com/haoyt5" icon={faGithub} />
            <IconLink
              href="https://www.linkedin.com/in/karenhytu/"
              icon={faLinkedin}
            />
            <IconLink
              href="https://www.pinterest.com/karenhaoyi/graphic-design/"
              icon={faPinterest}
            />
            <IconLink
              href="https://www.youtube.com/channel/UCLKVQ7801gi-7K-PUmOyXDg/featured?view_as=subscriber"
              icon={faYoutube}
            />
          </Col>
          <Col
            className="py-1"
            lg={{ offset: 5, size: 4 }}
            md={{ offset: 1, size: 11 }}
            sm="12"
          >
            <small>
              Copyright ©2023 <br />
              All Rights Reserved by Karen HY Tu
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
