import React from "react";

function Logo() {
	return (
		<a
			className="text-dark d-flex align-items-center"
			style={{ fontStyle: "italic", textDecoration: "none" }}
			color="link"
			href="www.karenhaoyitu.com"
		>
			<div style={{ width: "3.5rem" }}>
				<img src="/logo192.png" className="img-fluid" alt="..." />
			</div>
			<div className="p-2">
				<h1 style={{ fontSize: "1.5rem" }}>
					<b>karenhaoyitu.com</b>
				</h1>
			</div>
		</a>
	);
}

export default Logo;
