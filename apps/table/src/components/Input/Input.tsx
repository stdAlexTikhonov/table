import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Input.module.scss';
import { commonSelectors } from '../../store/common/selectors';
import { setValue } from '../../store/common/actions';

export const Input = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    dispatch(setValue(val));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      alert('Tab pressed');
    }
  }

  const value = useAppSelector(commonSelectors.value)
  return <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} className={styles.root} />;
}
