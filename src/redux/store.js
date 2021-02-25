import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import characters from "../features/characters/charactersSlice";

export default configureStore({
	reducer: {
		characters,
	},
	devToolsMiddleware: getDefaultMiddleware(),
});
