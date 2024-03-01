import { useNavigate } from 'react-router-dom';
import styles from './MenuButton.module.scss';
import React from 'react';

interface MenuButtonProps {
    nav: string;
    children: any;
}

const MenuButton: React.FC<MenuButtonProps> = ({ nav, children }) : JSX.Element => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/" + nav);
    }

    return (
        <button 
            className={styles.button}
            onClick={handleClick}
        >{children}</button>
    );
}

export default MenuButton;