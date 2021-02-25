import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listData: {
		isPending: false,
		results: [],
		count: 0,
	},
	currentCharacterData: null,
	currentPage: 1,
	pageNotFound: false,
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		charactersDataLoaded: (state, { payload }) => {
			state.listData.results = payload.results;
			state.listData.count = payload.count;
			state.listData.isPending = false;
			state.currentCharacterData = null;
			state.pageNotFound = false;
		},
		characterDataLoaded: (state, { payload }) => {
			state.currentCharacterData = payload;
			state.pageNotFound = false;
		},
		saveCurrentPage: (state, { payload }) => {
			state.currentPage = payload || 1;
		},
		setIsPending: (state) => {
			state.pageNotFound = false;
			state.listData.isPending = true;
		},
		setPageNotFound: (state) => {
			state.pageNotFound = true;
		},
	},
});

export const {
	charactersDataLoaded,
	characterDataLoaded,
	saveCurrentPage,
	setIsPending,
	setPageNotFound,
} = charactersSlice.actions;

export default charactersSlice.reducer;
