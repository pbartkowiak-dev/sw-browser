import { createAsyncThunk } from "@reduxjs/toolkit";
import endpoints from "../endpoints";
import { characterDataLoaded, setPageNotFound } from "../charactersSlice";

const getCharacterData = createAsyncThunk(
	"swapi.dev/api/",
	async (id, thunkAPI) => {
		const url = `${endpoints.getCharactersData}/${id}`;

		const response = await fetch(url);
		const responseJson = await response.json(response);

		if (!responseJson.name) {
			thunkAPI.dispatch(setPageNotFound());
		} else {
			thunkAPI.dispatch(characterDataLoaded(responseJson));
		}
	}
);

export default getCharacterData;
