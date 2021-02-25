import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	link: {
		textDecoration: "none",
		color: "inherit",
	},
});

function RouterLink({ children, ...props }) {
	const classes = useStyles();

	return (
		<Link className={classes.link} {...props}>
			{children}
		</Link>
	);
}

export default RouterLink;
