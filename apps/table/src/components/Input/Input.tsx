import React from 'react';
import { useCommon } from '../../hooks';
import styles from './Input.module.scss';

export const Input = () => {
  const { value, handleChange, handleKeyDown } = useCommon();
  return <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} className={styles.root} />;
}
