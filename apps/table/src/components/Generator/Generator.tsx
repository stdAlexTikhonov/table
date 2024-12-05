import { Container } from '@mui/material';
import { BasicTable } from '../BasicTable';
import { Dataset } from '../Dataset';
import { Parameters } from '../Parameters';

export const Generator = () => {
  return <Container>
    <Dataset />
    <Parameters />
    <BasicTable />
  </Container>
};
