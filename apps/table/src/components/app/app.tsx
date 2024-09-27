
import styles from './app.module.scss';

import { NxWelcome } from '../nx';

export function App() {
  return (
    <div className={styles.root}>
      <div className={styles.main} />
      <NxWelcome />
    </div>
  );
}
