import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Input.module.scss';
import { commonSelectors } from '../../store/common/selectors';
import { setValue } from '../../store/common';

export const Input = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    dispatch(setValue(val));
  }
  const value = useAppSelector(commonSelectors.value)
  return <input type="text" value={value} onChange={handleChange} className={styles.root} />;
}
