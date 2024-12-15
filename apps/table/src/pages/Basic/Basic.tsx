import { useEffect, useState } from "react";
import { useCommon } from "../../hooks";

import styles from './Basic.module.scss';
import { IconButton } from "@mui/material";
import MoneyIcon from '@mui/icons-material/Money';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { SelectCount } from "./components";


export const Basic = () => {
  const { columns, data, count } = useCommon();
  const len = columns.length;
  const [handred, setHandred] = useState(false);
  const [fixed, setFixed] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const pcwidth = (len < 10 || handred) ? '100%' : `${len * (100/count)}%`;
  const mobilewidth = `${len * (100/count)}%`;

  const handleClickH = () => setHandred(prev => !prev);
  const handleClickF = () => setFixed(prev => !prev);

  useEffect(() => {
    const handleOrientation = () => {
      switch (screen.orientation.type) {
        case "landscape-primary":
          alert("That looks good.");
          break;
        case "landscape-secondary":
          alert("Mmm… the screen is upside down!");
          break;
        case "portrait-secondary":
        case "portrait-primary":
          alert("Mmm… you should rotate your device to landscape");
          break;
        default:
          alert("The orientation API isn't supported in this browser :(");
      }
    };

    if (isMobile) window.addEventListener("orientationchange", handleOrientation, false);
    return () => {
      if (isMobile) window.removeEventListener('orientationchange', handleOrientation);
    }
  }, []);

  return (<div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <IconButton size='small' color={handred ? 'primary' : 'default'} onClick={handleClickH}><MoneyIcon /></IconButton>
        <IconButton size='small' color={fixed ? 'primary' : 'default'} onClick={handleClickF}><ViewColumnIcon /></IconButton>
        <SelectCount fixed={fixed} />
      </div>
      <div style={{ flexGrow: 1, height: 0 }}>
        <div className={styles.root}>
          <table className={styles.table} style={{ width: isMobile ? mobilewidth : pcwidth, tableLayout: fixed ? 'fixed' : 'auto' }}>
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
