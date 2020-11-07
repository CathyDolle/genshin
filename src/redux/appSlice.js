import { createSlice } from '@reduxjs/toolkit';
import { elements } from '../data/elementsData';

const appSlice = createSlice({
  name: 'app',
  initialState: { element: 'anemo' },
  reducers: {
    setElement: (state, action) => {
      const cssValue = elements.find(({ name }) => name === action.payload);
      document.documentElement.style.setProperty('--active', cssValue.color);
      return { ...state, element: action.payload };
    },
  },
});

const { setElement } = appSlice.actions;

export { setElement };

export default appSlice;
