import React from "react";

function Logo() {
	return (
		<a
			className="text-dark d-flex align-items-center"
			style={{ textDecoration: "none" }}
			color="link"
			href="/"
		>
			<div style={{ width: "2.35rem", height: "2.35rem" }}>
				<img src="/logo80.png" className="img-fluid" alt="..." />
			</div>
			<div className="p-2 sm-logo">
				<h1
					style={{
						fontSize: "1.25rem",
						lineHeight: "2.35rem",
						height: "2.35rem",
						margin: 0,
					}}
				>
					<b>KAREN HY TU</b>
				</h1>
			</div>
		</a>
	);
}

export default Logo;
