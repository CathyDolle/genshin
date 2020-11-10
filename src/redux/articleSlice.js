import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getArticle from './thunks/getArticle';

const articleAdapter = createEntityAdapter({
  selectId: (article) => article.id,
});

const articleSlice = createSlice({
  name: 'article',
  initialState: articleAdapter.getInitialState({ articleStatus: 'none' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticle.fulfilled, (state, action) => {
      articleAdapter.setAll(state, action.payload);
      state.articleStatus = 'fulfiled';
    })
      .addCase(getArticle.pending, (state) => {
        state.articleStatus = 'pending';
      })
      .addCase(getArticle.rejected, (state) => {
        state.articleStatus = 'rejected';
      });
  },
});

const { selectAll: selectArticlebySlug } = articleAdapter.getSelectors((state) => state.article);

export { selectArticlebySlug };
export default articleSlice;
