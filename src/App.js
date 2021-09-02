import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Landing} />
			</Switch>
		</Router>
	);
}

export default App;
