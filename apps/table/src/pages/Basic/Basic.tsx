import { useEffect, useState } from "react";
import { useCommon } from "../../hooks";

import styles from './Basic.module.scss';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';


export const Basic = () => {
  const { columns, data, count, handleSetCount } = useCommon();
  const len = columns.length;
  const [handred, setHandred] = useState(false);
  const [fixed, setFixed] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const width = (len < 10 || handred) ? '100%' : `${len * (100/count)}%`;

  const handleClick = () => {
    if (handred && fixed) {
      setFixed(false);
    } else if (handred) {
      setHandred(false);
    } else if (!fixed) {
      handleSetCount(2);
      setFixed(true);
    } else if (count === 2) {
      handleSetCount(4);
    } else if (count === 4) {
      handleSetCount(6);
    } else if (count === 6) {
      handleSetCount(8);
    } else if (count === 8) {
      handleSetCount(10);
    } else if (count === 10) {
      setHandred(true);
    }
  };

  useEffect(() => {
    const handleOrientation = () => {
      switch (screen.orientation.type) {
        case "landscape-primary":
        case "landscape-secondary":
          handleSetCount(4);
          break;
        case "portrait-secondary":
        case "portrait-primary":
          handleSetCount(2);
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
        <Badge badgeContent={fixed || handred ? handred ? len : count : null} color="primary">
          <IconButton size='small' color={fixed ? 'primary' : 'default'} onClick={handleClick}><ViewColumnIcon /></IconButton>
        </Badge>
      </div>
      <div style={{ flexGrow: 1, height: 0 }}>
        <div className={styles.root}>
          <table className={styles.table} style={{ width, tableLayout: fixed ? 'fixed' : 'auto' }}>
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
