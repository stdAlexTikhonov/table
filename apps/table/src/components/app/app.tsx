
import styles from './app.module.scss';
import { Faker, faker } from '@faker-js/faker';
import { Footer } from '../footer';
import { Input } from '../Input';
import { useCommon } from '../../hooks';
import { Types } from '../../store/const';

export function App() {
  const { actionType, datasets, handleSetDataset, parameters } = useCommon();

  const arr = Array(10).fill(0);

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
                  {parameters.map(item => <div key={item} style={{ cursor: 'pointer' }}>{item}</div>)}
                </div>
          }
          <table className={styles.table}>
            <thead>
              <tr>
                {
                  arr.map((item, index) => <th className={styles.th} key={`col-${index}`}>col-{index}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                arr.map((item, index) => <tr key={`row-${index}`}>
                  {
                    arr.map((_, i) => <td className={styles.td} key={`col-${i}`}>{faker['person'].firstName()}</td>)
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
