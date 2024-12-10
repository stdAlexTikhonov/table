import { useState } from "react";
import { useCommon } from "../../hooks";

import styles from './Basic.module.scss';
import { IconButton } from "@mui/material";
import MoneyIcon from '@mui/icons-material/Money';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';


export const Basic = () => {
  const { columns, data } = useCommon();
  const len = columns.length;
  const [handred, setHandred] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleClickH = () => setHandred(prev => !prev);
  const handleClickF = () => setFixed(prev => !prev);

  return (<div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <IconButton size='small' color='secondary' onClick={handleClickH}><MoneyIcon /></IconButton>
        <IconButton size='small' color='success' onClick={handleClickF}><ViewColumnIcon /></IconButton>
      </div>
      <div style={{ flexGrow: 1, height: 0 }}>
        <div className={styles.root}>
          <table className={styles.table} style={{ width: (len < 10 || handred) ? '100%' : `${len * 10}%`, tableLayout: fixed ? 'fixed' : 'auto' }}>
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
      </div>
    </div>
  );
};
