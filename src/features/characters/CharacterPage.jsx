import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCharacterData from "./middleware/characterData";
import Spinner from "../spinner/Spinner";
import CharacterDetails from "./CharacterDetails";
import PageNotFound from "./PageNotFound";

function CharacterPage({ match }) {
	const currentCharacterData = useSelector(
		(state) => state.characters.currentCharacterData
	);
	const isPageNotFound = useSelector(
		(state) => state.characters.pageNotFound
	);

	const dispatch = useDispatch();

	const idParam = Number(match?.params?.id);
	const characterId = Number.isInteger(idParam) && idParam > 0 ? idParam : 1;

	useEffect(() => {
		dispatch(getCharacterData(characterId));
	}, [dispatch, characterId]);

	if (isPageNotFound) {
		return <PageNotFound message={"404 - Character not found"} />;
	}

	if (!currentCharacterData) {
		return <Spinner />;
	}

	return <CharacterDetails characterData={currentCharacterData} />;
}

export default CharacterPage;
