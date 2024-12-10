import { useCommon } from "../../hooks";

import styles from './Basic.module.scss';

export const Basic = () => {
  const {  columns, data } = useCommon();

  return (<div className={styles.root}>
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
  );
};
