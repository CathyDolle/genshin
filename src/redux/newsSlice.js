import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getNews from './thunks/getNews';

const newsAdapter = createEntityAdapter({
  selectId: (news) => news.id,
});

const newsSlice = createSlice({
  name: 'news',
  initialState: newsAdapter.getInitialState({ newsStatus: 'none' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      newsAdapter.setAll(state, action.payload);
      state.newsStatus = 'fulfilled';
    })
      .addCase(getNews.pending, (state) => {
        state.newsStatus = 'pending';
      })
      .addCase(getNews.rejected, (state) => {
        state.newsStatus = 'rejected';
      });
  },
});

const { selectAll: selectAllNews } = newsAdapter.getSelectors((state) => state.news);

export { selectAllNews };
export default newsSlice;
