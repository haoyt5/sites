import React from "react";

function Logo() {
	return (
		<a
			className="text-dark d-flex align-items-center"
			style={{ fontStyle: "italic", textDecoration: "none" }}
			color="link"
			href="/"
		>
			<div style={{ width: "2.5rem", height: "2.5rem" }}>
				<img src="/logo80.png" className="img-fluid" alt="..." />
			</div>
			<div className="p-2 sm-logo">
				<h1 style={{ fontSize: "1.5rem" }}>
					<b>karenhaoyitu.com</b>
				</h1>
			</div>
		</a>
	);
}

export default Logo;
