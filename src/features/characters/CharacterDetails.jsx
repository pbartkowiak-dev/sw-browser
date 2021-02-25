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
	ListItem,
	ListItemText,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

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

function CharacterPage({ characterData }) {
	const classes = useStyles();

	const currentPage = useSelector((state) => state.characters.currentPage);

	const {
		name,
		gender,
		hair_color,
		eye_color,
		birth_year,
		height,
		skin_color,
	} = characterData;

	return (
		<Box display="flex" justifyContent="center">
			<Card className={classes.root}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<List>
						<Divider />
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={birth_year}
								secondary="Birth year"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={`${height} cm`}
								secondary="Height"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={gender}
								secondary="Gender"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={hair_color}
								secondary="Hair color"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={eye_color}
								secondary="Eye color"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								className={classes.listItem}
								primary={skin_color}
								secondary="Skin color"
							/>
						</ListItem>
						<Divider />
					</List>
				</CardContent>
				<CardActions className={classes.footer}>
					<Link to={`/${currentPage}`}>
						<Button size="small" color="primary">
							Go back to the list
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Box>
	);
}

export default CharacterPage;
