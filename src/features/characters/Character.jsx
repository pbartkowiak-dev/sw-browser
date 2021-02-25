import React from "react";
import { ListItem, makeStyles } from "@material-ui/core";
import Link from "../link/Link";

const useStyles = makeStyles({
	listItem: {
		minHeight: 60,
		justifyContent: "center",
		background: ({ idOdd }) => (idOdd ? "#fcfcfc" : "fff"),
	},
});

function Character({ characterData, idOdd }) {
	const classes = useStyles({ idOdd });
	const { url, name } = characterData;
	const characterId = url.split("/").slice(-2, -1)[0];

	return (
		<Link to={`/character/${characterId}`}>
			<ListItem
				button
				component="div"
				className={classes.listItem}
				justify="flex-center"
			>
				{name}
			</ListItem>
		</Link>
	);
}

export default Character;
