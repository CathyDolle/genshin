import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getIndispensable from './thunks/getIndispensable';

const indispensableAdapter = createEntityAdapter({
  selectId: (article) => article.id,
});

const indispensableSlice = createSlice({
  name: 'indispensable',
  initialState: indispensableAdapter.getInitialState({ articleStatus: 'none' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIndispensable.fulfilled, (state, action) => {
      indispensableAdapter.setAll(state, action.payload);
      state.articleStatus = 'fulfilled';
    })
      .addCase(getIndispensable.pending, (state) => {
        state.articleStatus = 'pending';
      })
      .addCase(getIndispensable.rejected, (state) => {
        state.articleStatus = 'rejected';
      });
  },
});

const {
  selectAll: selectAllIndispensableArticle,
} = indispensableAdapter.getSelectors((state) => state.indispensable);

export { selectAllIndispensableArticle };
export default indispensableSlice;
