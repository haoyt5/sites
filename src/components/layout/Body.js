import React from "react";
import { Container } from "reactstrap";
import Jumbotron from "../landing/Jumbotron";

function Body() {
	return (
		<Container style={{ paddingTop: "25vh" }}>
			<Jumbotron />
		</Container>
	);
}

export default Body;
