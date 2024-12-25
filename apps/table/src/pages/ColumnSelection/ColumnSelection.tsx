import { useEffect, useState } from "react";
import { useCommon } from "../../hooks";

import styles from './ColumnSelection.module.scss';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import MoneyIcon from "@mui/icons-material/Money";


export const ColumnSelection = () => {
  const { columns, data, count, handleSetCount } = useCommon();
  const len = columns.length;
  const [hundred, setHundred] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [column, setColumn] = useState(-1);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const width = (len < 10 || hundred) ? '100%' : `${len * (100/count)}%`;

  const handleClick = () => {
    if (!fixed) {
      handleSetCount(10);
      setFixed(true);
    } else if (count > 2) {
      handleSetCount(count - 2);
    } else {
      handleSetCount(10);
      setFixed(false);
    }
  };

  const handleClick2 = () => {
   setFixed(prev => !prev);
  };

  const handleHundred = () => {
    setHundred(prev => !prev);
  }

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
        <Badge badgeContent={fixed && !hundred ? count : null} color="primary">
          <IconButton size='small' color={hundred ? 'primary' : 'default'} onClick={handleHundred}><MoneyIcon /></IconButton>
          <IconButton size='small' color={fixed ? 'primary' : 'default'} onClick={hundred ? handleClick2 : handleClick}><ViewColumnIcon /></IconButton>
        </Badge>
      </div>
      <div style={{ flexGrow: 1, height: 0 }}>
        <div className={styles.root}>
          <table className={styles.table} style={{ width, tableLayout: fixed ? 'fixed' : 'auto' }}>
            <colgroup>
              {
                columns.map((item, index) => <col className={column === index ? styles.col : undefined} key={`col-${index}`} />)
              }
            </colgroup>
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
                    columns.map((param, i) => <td className={styles.td} key={`col-${i}`} onMouseEnter={() => setColumn(i)} onMouseLeave={() => setColumn(-1)}>{row[param]}</td>)
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
