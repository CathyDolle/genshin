import { createAsyncThunk } from '@reduxjs/toolkit';

const getNews = createAsyncThunk(
  'news/get',
  async () => {
    const response = await fetch('https://genshin.cchampou.me/titles');
    return response.json();
  },
);

export default getNews;
