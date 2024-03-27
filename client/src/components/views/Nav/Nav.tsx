import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import Sound, { ReactSoundProps } from 'react-sound';
import { SOUNDS_URL } from '../../../config';

const Nav: React.FC = () : JSX.Element => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [status, setStatus] = useState<ReactSoundProps['playStatus']>('STOPPED');

  function togglePlayStatus() {
    setStatus(status => status === 'STOPPED' ? 'PLAYING' : 'STOPPED')
  }

  function statusLabel(status: ReactSoundProps['playStatus']): string { // eslint-disable-line
    switch(status) {
      case 'STOPPED':
        return 'PLAY';
      case 'PLAYING':
        return 'STOP';
      default:
        return 'STOP';
    }
  }

  return (
    <div className={styles.root}>
      <nav className={styles.navigation}>
        <div className={`${styles.navicon1} ${toggleNav ? styles.open : ''}`} onClick={() => setToggleNav((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {toggleNav ? 
          <ul>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/">Home</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/scores">Scores</NavLink>
            <NavLink onClick={() => setToggleNav((prev) => !prev)} className={({ isActive }) => isActive ? styles.linkActive : styles.link} to="/instruction">Instruction</NavLink>
            <div className={styles.music}>
              <p className={styles.link}>Music:</p>
              <button className={styles.btnMusic} onClick={togglePlayStatus}>
                <FontAwesomeIcon className={styles.icon} icon={status === 'PLAYING' ? faVolumeHigh : faVolumeXmark} />
              </button>
            </div>
            <div className={styles.music}>
              <p className={styles.link}>Sound:</p>
              <button className={styles.btnMusic} onClick={togglePlayStatus}>
                <FontAwesomeIcon className={styles.icon} icon={1 === 1 ? faVolumeHigh : faVolumeXmark} />
              </button>
            </div>
          </ul>
        : null}
      </nav>
      <Sound
        url={SOUNDS_URL +'simple-piano-melody-9834.mp3'}
        playStatus={status}
        loop={true}
      />
    </div>
  );
};

export default Nav;