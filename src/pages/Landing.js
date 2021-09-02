import React from "react";
import Navbar from "../components/layout/Navbar";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";

function Landing() {
	return (
		<div
			style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
		>
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}

export default Landing;
