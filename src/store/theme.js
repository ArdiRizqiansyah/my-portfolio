import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
  mode: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialTheme,
    reducers: {
        toggleTheme(state) {
            state.mode = !state.mode;

            // change theme
            if (state.mode) {
                // change to light theme
                document.querySelector("html").setAttribute("data-theme", "light");
            }else{
                // change to dark theme
                document.querySelector("html").setAttribute("data-theme", "dark");
            }
        }
    }
});

export const themeActions = themeSlice.actions;

export default themeSlice;