import { createAsyncThunk } from '@reduxjs/toolkit';

const getNews = createAsyncThunk(
  'dailies/get',
  async () => {
    const response = await fetch('https://genshin.cchampou.me/dailies-items');
    return response.json();
  },
);

export default getNews;
