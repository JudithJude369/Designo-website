import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const hamburgerSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
