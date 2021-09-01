import React, { lazy, Suspense } from "react";
import { Container } from "reactstrap";

const Jumbotron = lazy(() => import("../landing/Jumbotron"));

function Body() {
	return (
		<Container style={{ padding: "100px 3vw" }}>
			<Suspense fallback={<span>...</span>}>
				<Jumbotron />
			</Suspense>
		</Container>
	);
}

export default Body;
