import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getNews from './thunks/getNews';

const newsAdapter = createEntityAdapter({
  selectId: (news) => news.id,
});

const newsSlice = createSlice({
  name: 'news',
  initialState: newsAdapter.getInitialState({ newsStatus: 'empty' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      newsAdapter.setAll(action.payload);
      state.newsStatus = 'fulfilled';
    });
    // [getNews.rejected]: (state) => {
    //   state.newsStatus = 'rejected';
    // },
    // [getNews.pending]: (state) => {
    //   state.newsStatus = 'pending';
    // },
  },
});

const { selectAll: selectAllNews } = newsAdapter.getSelectors((state) => state.news);

export { selectAllNews };
export default newsSlice;
