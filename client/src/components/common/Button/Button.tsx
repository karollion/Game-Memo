import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
    action?: () => void;
    children: any;
}

const Button: React.FC<ButtonProps> = ({ action, children }) : JSX.Element => {
    return (
        <button 
            className={styles.button}
            onClick={action}
        >{children}</button>
    );
}

export default Button;