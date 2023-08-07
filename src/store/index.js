import { configureStore } from "@reduxjs/toolkit";

import skillSlice from './skill-slice';
import themeSlice from './theme';
import projectSlice from "./project-slice";

const store = configureStore({
    reducer: { skill: skillSlice.reducer, theme: themeSlice.reducer, project: projectSlice.reducer },
});

export default store;