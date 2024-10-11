
import styles from './app.module.scss';
import { faker } from '@faker-js/faker';
import { Footer } from '../footer';

export function App() {
  const list = Object.keys(faker);
  console.log(list);
  const params = Object.keys(faker['person']);
  console.log(params);
  const arr = Array(10).fill(0);
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.container}>
          <input type="text" className={styles.input} />
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
