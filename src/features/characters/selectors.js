import { createSelector } from "@reduxjs/toolkit";

const paginationCountSelector = (state) => state.characters.listData.count;

const ceil = (num) => Math.ceil(num / 10);

export const countSelector = createSelector(paginationCountSelector, (count) =>
	ceil(count)
);
