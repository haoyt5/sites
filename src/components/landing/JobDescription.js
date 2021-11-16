import React from "react";
import PropTypes from "prop-types";
import { TextLink } from "../layout/Typography";

const JobDescription = (id) => {
	switch (id) {
	case "trendMicro":
		return (
			<div>
				<p className="m-0">
						I worked as a senior front-end engineer mainly using React, Redux to
						build licensing related service user interface, including 7,000+
						business customers web apps on{" "}
					<TextLink
						href="https://www.trendmicro.com/en_us/business/products/detection-response.html"
						text="Trend Micro Vision One"
					/>{" "}
						and internal business intelligence management platforms integrated
						data from Salesforce and Trend’s products. Besides, since Trend
						applied agile and data-driven development, I led designed and
						launched a dashboard for each service’s user behavior reports.
				</p>
				<p className="my-1">Honors</p>
				<p className="m-0">
						🥈 2nd place among 93 teams in the Customer Success and DevOps
						contest (2020)
					<br />
						🥇 1st place among 20 teams in the Information System(IS) DevOps
						Camp (2019)
				</p>
			</div>
		);
	case "appWorks":
		return (
			<div>
				<p className="m-0">
						AppWorks School is a project-based software engineer training
						program. I selected as one of the 9 trainees from over 400+
						applicants. I independently built a clothes shopping website{" "}
					<TextLink href="/#project" text="STYLiSH" /> using vanilla
						JavaScript and a housework management web app{" "}
					<TextLink href="/#project" text="HOMIE" /> using React, Redux and
						Firebase
				</p>
			</div>
		);
	default:
		return <div>no no</div>;
	}
};

JobDescription.propTypes = {
	key: PropTypes.string,
};

export default JobDescription;
