
import styles from './BasicTable.module.scss';
import { useCommon } from '../../hooks';

export function BasicTable() {
  const {  columns, data } = useCommon();

  return (
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
  );
}
