import { createAsyncThunk } from '@reduxjs/toolkit';

const getArticle = createAsyncThunk(
  'article/get',
  async (slug) => {
    const response = await fetch(`https://genshin.cchampou.me/articles?slug=${slug}`);
    return response.json();
  },
);

export default getArticle;
