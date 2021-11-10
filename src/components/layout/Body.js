import React, { lazy, Suspense, useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getData } from "../../utility/common";
import Contact from "../landing/Contact";

const Jumbotron = lazy(() => import("../landing/Jumbotron"));
const Experience = lazy(() => import("../landing/Experience"));
const Projects = lazy(() => import("../landing/Projects"));

function Body() {
	const [data, setData] = useState(null);
	useEffect(() => {
		getData("assets/data/landing.json").then((data) => setData(data));
	}, []);

	return (
		<>
			<Container style={{ padding: "100px 3vw" }}>
				<Suspense fallback={<span>...</span>}>
					<Jumbotron />
					<Experience data={data} />
					<Projects data={data} />
				</Suspense>
			</Container>
			<Contact data={data} />
		</>
	);
}

export default Body;
