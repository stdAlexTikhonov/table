import { type State } from '../types';
import { NameSpace } from '../const';

const value = (state: State) => state[NameSpace.Common].value;

export const commonSelectors = {
  value
}
