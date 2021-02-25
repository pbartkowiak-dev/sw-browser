import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import CharactersList from "./features/characters/CharactersList";
import CharacterPage from "./features/characters/CharacterPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "15px 20px 5px 20px",
		[theme.breakpoints.down("sm")]: {
			padding: 0,
		},
	},
}));

function App() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Container maxWidth="md" className={classes.container}>
				<Router>
					<Switch>
						<Route
							exact
							path={["/", "/:page"]}
							component={CharactersList}
						/>
						<Route
							path="/character/:id"
							component={CharacterPage}
						/>
						<Redirect to="/" />
					</Switch>
				</Router>
			</Container>
		</>
	);
}

export default App;
