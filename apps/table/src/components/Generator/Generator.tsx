import { BasicTable } from '../BasicTable';
import { Dataset } from '../Dataset';
import { Parameters } from '../Parameters';
import { Input } from '../Input';

export const Generator = () => {
  return <>
    <Dataset />
    <Parameters />
    <div style={{ flexGrow: 1, overflow: 'auto' }}>
      <BasicTable />
    </div>
    <Input />
  </>
};
