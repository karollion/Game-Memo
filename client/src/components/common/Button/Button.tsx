import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children }) : JSX.Element => {

  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Button;