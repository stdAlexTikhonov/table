import { Faker } from "@faker-js/faker/.";
import { createAction } from "@reduxjs/toolkit";

export const setValue = createAction<string>('setValue');
export const setDataset = createAction<keyof Faker>('setDataset');
