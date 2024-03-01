import MenuButton from '../../common/MenuButton/MenuButton';
import styles from './Instruction.module.scss';
import React from 'react';

const Instruction: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Instruction</h1>
            <MenuButton nav={''}>Back</MenuButton>
        </div>
    );
};

export default Instruction;