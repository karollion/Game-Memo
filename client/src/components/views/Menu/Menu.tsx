import styles from './Menu.module.scss';
import React from 'react';

const Menu: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <p>
               Menu linki do stron
            </p>
        </div>
    );
};

export default Menu;