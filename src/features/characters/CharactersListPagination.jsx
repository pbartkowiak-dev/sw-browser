import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { countSelector } from "./selectors";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: 10,
		display: "flex",
		justifyContent: "flex-end",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},
	},
}));

function CharactersListPagination() {
	const classes = useStyles();
	const theme = useTheme();

	const isSm = useMediaQuery(theme.breakpoints.down("sm"));

	const count = useSelector((state) => countSelector(state));
	const currentPage = useSelector((state) => state.characters.currentPage);

	return (
		<div className={classes.container}>
			<Pagination
				page={currentPage}
				count={count}
				shape="rounded"
				variant="outlined"
				siblingCount={isSm ? 0 : 1}
				renderItem={(item) => (
					<PaginationItem
						component={Link}
						to={`/${item.page}`}
						{...item}
					/>
				)}
			/>
		</div>
	);
}

export default CharactersListPagination;
