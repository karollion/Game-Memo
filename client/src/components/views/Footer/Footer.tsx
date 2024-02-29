import styles from './Footer.module.scss';
import React from 'react';

function getDate(): string {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    return `${year}`;
  }

const Footer: React.FC = () : JSX.Element => {
    return (
        <div className={styles.root}>
            <p>
                Copyright &copy; Memo Game {getDate()}.  Create by:   
                <a href='https://karol-bernatowicz-portfolio.replit.app/'  target="_blank" title="Karol Bernatowicz home page"  rel="noreferrer">  Karol Bernatowicz</a>
            </p>
        </div>
    );
};

export default Footer;