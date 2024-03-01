import styles from './Instruction.module.scss';
import React from 'react';

//import components
import MenuButton from '../../common/MenuButton/MenuButton';

const Instruction: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Instruction</h1>
            <MenuButton nav={''}>Back</MenuButton>
        </div>
    );
};

export default Instruction;