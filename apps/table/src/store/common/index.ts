import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';


interface CommonI { value: string }


const initialState: CommonI = {
  value: ''
};

export const common = createSlice({
  name: NameSpace.Common,
  initialState,
  reducers: {
    setValue (state, action) {
      state.value = action.payload;
    }
  }
});

export const { setValue } = common.actions;
