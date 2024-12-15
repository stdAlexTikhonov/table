import * as React from 'react';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';

import styles from './SelectCount.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCommon } from "../../../hooks";


interface Props {
  fixed: boolean
}

export const SelectCount = ({ fixed }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { count, handleSetCount } = useCommon();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton size='small' color={fixed ? 'primary' : 'default'} onClick={handleClick} className={styles.count}>{count}</IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ButtonGroup aria-label="Count columns" orientation='vertical'>
          {
            Array(10).fill(0).map((_, i) => i > 0 ? <Button size='small' variant={i === count - 1 ? 'contained' : 'outlined'} key={i} onClick={() => handleSetCount(i + 1)}>{i + 1}</Button> : null)
          }
        </ButtonGroup>
      </Popover>
    </div>
  );
}
