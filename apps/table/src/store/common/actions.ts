import { createAction } from "@reduxjs/toolkit";

export const setValue = createAction<string>('setValue');
export const setDataset = createAction<string>('setDataset');
export const resetType = createAction('resetType');
