import { Container } from '@mui/material';
import { BasicTable } from '../BasicTable';
import { Dataset } from '../Dataset';
import { Parameters } from '../Parameters';
import { Input } from '../Input';

export const Generator = () => {
  return <Container style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }} maxWidth='xl'>
    <Dataset />
    <Parameters />
    <div style={{ flexGrow: 1, overflow: 'auto' }}>
      <BasicTable />
    </div>
    <Input />
  </Container>
};
