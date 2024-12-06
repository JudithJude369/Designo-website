import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burgerMenu: false,
};

export const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.burgerMenu = true;
    },
    notToggleMenu: (state) => {
      state.burgerMenu = false;
    },
  },
});

export const { toggleMenu, notToggleMenu } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
