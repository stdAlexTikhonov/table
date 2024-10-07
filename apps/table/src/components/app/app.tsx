
import styles from './app.module.scss';

import { Footer } from '../footer';

export function App() {

  const arr = Array(10).fill(0);
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <table className={styles.table}>
          <tbody>
            {arr.map((item, index) => <tr key={`row-${index}`}>
              {
                arr.map((_, i) => <td key={`col-${i}`}>1</td>)
              }
            </tr>)}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
