import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Types } from '../const';
import { setDataset, setValue } from './actions';
import { faker } from '@faker-js/faker';


interface CommonI {
  type: Types
  value: string
  length: number
  dataset: string
  filtered: string[]
  datasetlist: string[]
  columns: string[]
  data: Record<string, string>[]
}


const initialState: CommonI = {
  type: Types.Default,
  value: '',
  length: 10,
  dataset: '',
  columns: [],
  data: [],
  filtered: [],
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
        state.filtered = state.datasetlist;
        state.value = '';
      } else if (state.type === Types.Dataset && action.payload.at(-1) === ';') {
        state.dataset = action.payload.slice(0, -1);
        if (state.datasetlist.includes(state.dataset)) {
          const parameters = Object.keys(faker[state.dataset]);
          state.columns = parameters.filter(param => param !== 'faker');
          state.value = '';
          state.filtered = [];
          state.type = Types.Default;
        } else {
          alert(`Dataset ${state.dataset} does not exist! Please try again!`)
        }

      } else if (action.payload.toLowerCase() === Types.Parameters) {
        state.type = Types.Parameters;
        state.value = '';
      } else if (action.payload.toLowerCase() === Types.Length) {
        state.type = Types.Length;
        state.value = '';
      } else if (state.type === Types.Length && action.payload.at(-1) === ';') {
        const val = parseInt(action.payload);
        state.length = val;
        state.value = '';
        state.type = Types.Default;
      } else if (action.payload.toLowerCase() === Types.Generate) {
        state.value = '';
        state.data = Array.from({ length: state.length }, () => state.columns.reduce((a, b) => ({ ...a, [b]: faker[state.dataset][b]() }), {}))
      } else if (action.payload.toLowerCase() === Types.Reset) {
        return initialState
      } else if (state.type === Types.Dataset) {
        state.value = action.payload;
        state.filtered = state.datasetlist.filter(item => state.value.length ? item.startsWith(state.value) : item);
      } else {
        state.value = action.payload;
      }
    })
    .addCase(setDataset, (state, action) => {
      state.dataset = action.payload;
      const parameters = Object.keys(faker[action.payload]);
      state.columns = parameters.filter(param => param !== 'faker');
      state.type = Types.Default;
    })
});

