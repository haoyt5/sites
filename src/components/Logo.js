import React from "react";
import { Button } from "reactstrap";

function Logo() {
	return (
		<Button
			className="text-dark d-flex justify-content-center align-items-center"
			style={{ fontStyle: "italic" }}
			color="link"
		>
			<div style={{ width: "3.5rem" }}>
				<img src="/logo192.png" className="img-fluid" alt="..." />
			</div>
			<div className="p-2">
				<h1 style={{ fontSize: "1.5rem" }}>
					<b>karenhaoyitu.com</b>
				</h1>
			</div>
		</Button>
	);
}

export default Logo;
