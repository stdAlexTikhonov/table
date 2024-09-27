
import styles from './app.module.scss';

import { Footer } from '../footer';

export function App() {
  return (
    <div className={styles.root}>
      <div className={styles.main} />
      <Footer />
    </div>
  );
}
