import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Types } from '../const';
import { resetType, setDataset, setValue } from './actions';
import { Faker, faker } from '@faker-js/faker';


interface CommonI {
  type: Types
  value: string
  length: number
  dataset: string
  datasetlist: string[]
  parameters: string[]
  data: Record<string, string>[]
}


const initialState: CommonI = {
  type: Types.Default,
  value: '',
  length: 0,
  dataset: '',
  parameters: [],
  data: [],
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
        state.data = Array.from({ length: state.length }, () => state.parameters.reduce((a, b) => ({ ...a, [b]: faker[state.dataset][b]() }), {}))
      } else {
        state.value = action.payload;
      }
    })
    .addCase(setDataset, (state, action) => {
      state.dataset = action.payload;
      const parameters = Object.keys(faker[action.payload]);
      state.parameters = parameters.filter(param => param !== 'faker');
      state.type = Types.Default;
    })
    .addCase(resetType, (state) => {
      state.type = Types.Default;
    })
});

