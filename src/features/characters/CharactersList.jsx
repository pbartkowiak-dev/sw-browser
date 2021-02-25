import React, { useEffect } from "react";
import Character from "./Character";
import {
	Box,
	Divider,
	List,
	ListSubheader,
	makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import characterPageChanged from "./middleware/charactersData";
import Spinner from "../spinner/Spinner";
import CharactersListPagination from "./CharactersListPagination";
import Link from "../link/Link";
import PageNotFound from "./PageNotFound";

const useStyles = makeStyles((theme) => ({
	list: {
		width: "100%",
		minHeight: 450,
		textAlign: "center",
		fontSize: "1.1em",
		backgroundColor: theme.palette.background.paper,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1em",
			minHeight: "auto",
			height: "calc(100vh - 60px)",
			overflowY: "scroll",
		},
	},
	header: {
		fontSize: "1.1rem",
	},
}));

function CharactersList({ match }) {
	const classes = useStyles();
	const charactersList = useSelector(
		(state) => state.characters.listData.results
	);
	const isListPending = useSelector(
		(state) => state.characters.listData.isPending
	);
	const isPageNotFound = useSelector(
		(state) => state.characters.pageNotFound
	);

	const dispatch = useDispatch();

	const pageParam = Number(match?.params?.page);
	const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;

	useEffect(() => {
		dispatch(characterPageChanged(page));
	}, [dispatch, page]);

	if (isPageNotFound) {
		return <PageNotFound />;
	}

	if (!charactersList.length || isListPending) {
		return <Spinner />;
	}

	return (
		<>
			<Box display="flex" justifyContent="center" boxShadow={1}>
				<List
					className={classes.list}
					component="nav"
					subheader={
						<ListSubheader
							component="div"
							className={classes.header}
						>
							<Link to="/">Star Wars Characters</Link>
						</ListSubheader>
					}
				>
					<Divider />
					{charactersList.map((characterData, index) => (
						<Character
							characterData={characterData}
							idOdd={!(index % 2)}
							key={index}
						/>
					))}
				</List>
			</Box>
			<CharactersListPagination />
		</>
	);
}

export default CharactersList;
