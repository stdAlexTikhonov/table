import { type State } from '../types';
import { NameSpace } from '../const';

const value = (state: State) => state[NameSpace.Common].value;
const actionType = (state: State) => state[NameSpace.Common].type;
const datasets = (state: State) => state[NameSpace.Common].datasetlist;

export const commonSelectors = {
  value,
  actionType,
  datasets
}
