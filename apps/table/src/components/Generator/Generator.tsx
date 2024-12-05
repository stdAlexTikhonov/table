import { BasicTable } from '../BasicTable';
import { Dataset } from '../Dataset';
import { Input } from '../Input';
import { Parameters } from '../Parameters';
import styles from './Generator.module.scss';

export const Generator = () => {
  return <div className={styles.root}>
  <Input />
  <Dataset />
  <Parameters />
  <BasicTable />
</div>
}
