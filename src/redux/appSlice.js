import { createSlice } from '@reduxjs/toolkit';
import { elements } from '../data/elementsData';

const appSlice = createSlice({
  name: 'app',
  initialState: { element: 'anemo', light: false },
  reducers: {
    setElement: (state, action) => {
      const cssValue = elements.find(({ name }) => name === action.payload);
      document.documentElement.style.setProperty('--active', cssValue.color);
      return { ...state, element: action.payload };
    },
    setLight: (state, { payload: light }) => {
      if (light) {
        document.documentElement.className = 'light';
      } else {
        document.documentElement.className = '';
      }
      return {
        ...state,
        light,
      };
    },
  },
});

const local = (state) => state.app;

export const getElementData = (state) => local(state).element;
export const getLightTheme = (state) => local(state).light;

const { setElement, setLight } = appSlice.actions;

export { setElement, setLight };

export default appSlice;
