import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Types } from '../const';


interface CommonI {
  type: Types
  value: string
}


const initialState: CommonI = {
  type: Types.Default,
  value: ''
};

export const common = createSlice({
  name: NameSpace.Common,
  initialState,
  reducers: {
    setValue (state, action) {
      if (action.payload.toLowerCase() === Types.Dataset) {
        state.type = Types.Dataset
        state.value = '';
      } else {
        state.value = action.payload;
      }
    }
  }
});

export const { setValue } = common.actions;
