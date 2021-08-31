import React from "react";
import { Container } from "reactstrap";
import Jumbotron from "../landing/Jumbotron";

function Body() {
	return (
		<Container style={{ padding: "100px 3vw" }}>
			<Jumbotron />
		</Container>
	);
}

export default Body;
