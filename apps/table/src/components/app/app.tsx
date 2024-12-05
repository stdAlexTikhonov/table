
import styles from './app.module.scss';
import { Footer } from '../footer';
import { Input } from '../Input';

import { BasicTable } from '../BasicTable/BasicTable';
import { Parameters } from '../Parameters';
import { Dataset } from '../Dataset';

export function App() {

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.container}>
          <Input />
          <Dataset />
          <Parameters />
          <BasicTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
