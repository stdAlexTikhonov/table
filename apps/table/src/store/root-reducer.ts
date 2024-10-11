
import { combineReducers } from '@reduxjs/toolkit';

import { common } from './common';
import { NameSpace } from './const';


export const rootReducer = combineReducers({
  [NameSpace.Common]: common.reducer,
});
