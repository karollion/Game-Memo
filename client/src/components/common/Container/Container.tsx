import styles from './Container.module.scss';
import React from 'react';

interface ContainerProps {
    children: any;
}

const Container: React.FC<ContainerProps> = ({ children }) : JSX.Element => {

    return (
        <div className={styles.root}>{children}</div>
    );
}

export default Container;