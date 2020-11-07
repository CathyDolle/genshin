import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import getDailies from './thunks/getDailies';

const dailiesAdapter = createEntityAdapter({
  selectId: (dailies) => dailies.id,
});

const dailiesSlice = createSlice({
  name: 'dailies',
  initialState: dailiesAdapter.getInitialState({ dailiesStatus: 'none' }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDailies.fulfilled, (state, action) => {
      dailiesAdapter.setAll(state, action.payload);
      state.dailiesStatus = 'fulfilled';
    });
    builder.addCase(getDailies.pending, (state) => {
      state.dailiesStatus = 'pending';
    });
    builder.addCase(getDailies.rejected, (state) => {
      state.dailiesStatus = 'rejected';
    });
  },
});

const { selectAll: selectAllDailies } = dailiesAdapter.getSelectors((state) => state.dailies);

export { selectAllDailies };
export default dailiesSlice;
