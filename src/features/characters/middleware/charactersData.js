import { createAsyncThunk } from "@reduxjs/toolkit";
import endpoints from "../endpoints";
import {
	charactersDataLoaded,
	saveCurrentPage,
	setIsPending,
	setPageNotFound,
} from "../charactersSlice";

const characterPageChanged = createAsyncThunk(
	"swapi.dev/api/",
	async (page, thunkAPI) => {
		thunkAPI.dispatch(setIsPending());

		const url = `${endpoints.getPage}${page}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson?.detail === "Not found") {
			thunkAPI.dispatch(setPageNotFound());
		} else {
			thunkAPI.dispatch(saveCurrentPage(page));
			thunkAPI.dispatch(charactersDataLoaded(responseJson));
		}
	}
);

export default characterPageChanged;
