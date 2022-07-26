import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className={styles.header_container}>
    <h1 className={styles.header_title}>
      В Вашем списке <b>{todoCount}</b> задачи
    </h1>
    <p>Нажмите на задачу, чтобы пометить её, как выполненную</p>
  </div>
);
