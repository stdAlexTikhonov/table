
import styles from './app.module.scss';
import { faker } from '@faker-js/faker';
import { Footer } from '../footer';
import { Input } from '../Input';

export function App() {
  const arr = Array(10).fill(0);
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.container}>
          <Input />
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
