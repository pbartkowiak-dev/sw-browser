import React from "react";
import Link from "../link/Link";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	List,
	makeStyles,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 445,
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			minWidth: "auto",
			width: "100%",
			height: "100vh",
			display: "flex",
			flexDirection: "column",
		},
	},
	listItem: {
		textAlign: "center",
	},
	footer: {
		[theme.breakpoints.down("sm")]: {
			alignItems: "flex-end",
			flex: 1,
		},
	},
}));

function PageNotFound({ message }) {
	const classes = useStyles();

	return (
		<Box display="flex" justifyContent="center">
			<Card className={classes.root}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{message || "404 - Page not found"}
					</Typography>
					<List>
						<Divider />
					</List>
				</CardContent>
				<CardActions className={classes.footer}>
					<Link to={`/`}>
						<Button size="small" color="primary">
							Go back to the list
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Box>
	);
}

export default PageNotFound;
