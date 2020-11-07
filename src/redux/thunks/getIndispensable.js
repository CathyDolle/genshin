import { createAsyncThunk } from '@reduxjs/toolkit';

const getIndispensable = createAsyncThunk(
  'indispensable/get',
  async () => {
    const response = await fetch('https://genshin.cchampou.me/indispensable-items');
    return response.json();
  },
);

export default getIndispensable;
