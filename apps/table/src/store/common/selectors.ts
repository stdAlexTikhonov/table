import { type State } from '../types';
import { NameSpace } from '../const';

const value = (state: State) => state[NameSpace.Common].value;
const actionType = (state: State) => state[NameSpace.Common].type;
const datasets = (state: State) => state[NameSpace.Common].datasetlist;
const dataset = (state: State) => state[NameSpace.Common].dataset;
const columns = (state: State) => state[NameSpace.Common].columns;
const length = (state: State) => state[NameSpace.Common].length;
const data = (state: State) => state[NameSpace.Common].data;
const filtered = (state: State) => state[NameSpace.Common].filtered;
const count = (state: State) => state[NameSpace.Common].count;

export const commonSelectors = {
  value,
  actionType,
  datasets,
  dataset,
  columns,
  length,
  data,
  filtered,
  count
}
