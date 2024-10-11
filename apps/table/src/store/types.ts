import { type store } from './index';
import { type rootReducer } from './root-reducer';

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
