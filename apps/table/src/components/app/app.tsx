
import styles from './app.module.scss';
import { Faker } from '@faker-js/faker';
import { Footer } from '../footer';
import { Input } from '../Input';
import { useCommon } from '../../hooks';
import { Types } from '../../store/const';

export function App() {
  const { actionType, datasets, handleSetDataset, columns, data } = useCommon();

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.container}>
          <Input />
          {
            actionType === Types.Dataset
              && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {datasets.map(item => <div key={item} style={{ cursor: 'pointer' }} onClick={() => handleSetDataset(item as keyof Faker)}>{item}</div>)}
                </div>
          }
                    {
            actionType === Types.Parameters
              && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {columns.map(item => <div key={item} style={{ cursor: 'pointer' }}>{item}</div>)}
                </div>
          }
          <table className={styles.table}>
            <thead>
              <tr>
                {
                  columns.map((item, index) => <th className={styles.th} key={`col-${index}`}>{item}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                data.map((row, index) => <tr key={`row-${index}`}>
                  {
                    columns.map((param, i) => <td className={styles.td} key={`col-${i}`}>{row[param]}</td>)
                  }
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
