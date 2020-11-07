import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getIndispensable from './thunks/getIndispensable';

const articleAdapter = createEntityAdapter({
  selectId: (article) => article.id,
});

const indispensableSlice = createSlice({
  name: 'indispensable',
  initialState: articleAdapter.getInitialState({ articleStatus: 'none' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIndispensable.fulfilled, (state, action) => {
      articleAdapter.setAll(state, action.payload);
      state.articleStatus = 'fulfilled';
    });
    builder.addCase(getIndispensable.pending, (state) => {
      state.articleStatus = 'pending';
    });
    builder.addCase(getIndispensable.rejected, (state) => {
      state.articleStatus = 'rejected';
    });
  },
});

const {
  selectAll: selectAllIndispensableArticle,
} = articleAdapter.getSelectors((state) => state.indispensable);

export { selectAllIndispensableArticle };
export default indispensableSlice;
