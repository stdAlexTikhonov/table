import { type State } from '../types';
import { NameSpace } from '../const';

const value = (state: State) => state[NameSpace.Common].value;
const actionType = (state: State) => state[NameSpace.Common].type;
const datasets = (state: State) => state[NameSpace.Common].datasetlist;
const dataset = (state: State) => state[NameSpace.Common].dataset;
const parameters = (state: State) => state[NameSpace.Common].parameters;

export const commonSelectors = {
  value,
  actionType,
  datasets,
  dataset,
  parameters
}
