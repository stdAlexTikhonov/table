
import styles from './app.module.scss';
import { Faker } from '@faker-js/faker';
import { Footer } from '../footer';
import { Input } from '../Input';
import { useCommon } from '../../hooks';
import { Types } from '../../store/const';
import { BasicTable } from '../BasicTable/BasicTable';

export function App() {
  const { actionType, filtered, handleSetDataset, columns, value } = useCommon();

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.container}>
          <Input />
          {
            actionType === Types.Dataset
              && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {filtered.map(item => <div key={item} style={{ cursor: 'pointer' }} onClick={() => handleSetDataset(item as keyof Faker)}>{item}</div>)}
                </div>
          }
          {
            actionType === Types.Parameters
              && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {columns.filter(item => item.startsWith(value)).map(item => <div key={item} style={{ cursor: 'pointer' }}>{item}</div>)}
                </div>
          }
          <BasicTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
