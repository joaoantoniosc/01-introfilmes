import styles from './Header.module.css';

import introcompLogo from '../assets/introcomp-logo.svg';

export function Header (){
    return(
        <header className={styles.header}>
            <img src={introcompLogo} alt="Introcomp" />
        </header>
    )
}