// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Ui } from '@org/ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="table" />
      <Ui />
    </div>
  );
}

export default App;
