import React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Упс! Такой страницы не существует</h2>
      <p>
        <Link to="/">Вернуться на главную</Link>
      </p>
    </div>
  );
};
