
import styles from './app.module.scss';
import { Footer } from '../footer';

import { Generator } from '../Generator';

export function App() {

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Generator />
      </div>
      <Footer />
    </div>
  );
}
