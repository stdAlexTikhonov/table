import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Types } from '../const';
import { resetType, setDataset, setValue } from './actions';


interface CommonI {
  type: Types
  value: string
  dataset: string
  datasetlist: string[]
}


const initialState: CommonI = {
  type: Types.Default,
  value: '',
  dataset: '',
  datasetlist: ['airline', 'animal', 'color', 'commerce', 'company', 'database', 'finance', 'food', 'git', 'hacker', 'image', 'internet', 'location', 'lorem', 'music', 'person', 'phone', 'science', 'system', 'vehicle', 'word']
};

export const common = createSlice({
  name: NameSpace.Common,
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(setValue, (state, action) => {
      if (action.payload.toLowerCase() === Types.Dataset) {
        state.type = Types.Dataset;
        state.value = '';
      } else if (action.payload.toLowerCase() === Types.Parameters) {
        state.type = Types.Parameters;
        state.value = '';
      } else {
        state.value = action.payload;
      }
    })
    .addCase(setDataset, (state, action) => {
      state.dataset = action.payload;
      state.type = Types.Default;
    })
    .addCase(resetType, (state) => {
      state.type = Types.Default;
    })
});

