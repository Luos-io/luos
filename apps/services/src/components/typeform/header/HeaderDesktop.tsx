import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const HeaderDesktop = () => {
  return (
    <div className={`${styles.navBar} ${styles.mobileNone}`}>
      <a href="https://luos.io" className={styles.brand}>
        <Image src="/logo_luos.gif" alt="logo luos" width="75" height="25" />
      </a>
      <nav className={styles.nav}>
        <a href="https://www.luos.io/#technology" className={styles.navLink}>
          Technology
        </a>
        <a href="https://www.luos.io/blog" className={styles.navLink}>
          Blog
        </a>
        <a href="https://docs.luos.io/" className={styles.navLink}>
          Docs
        </a>
        <a href="https://github.com/luos-io" className={styles.navLink}>
          Github
        </a>
        <a href="https://www.luos.io/support" className={`${styles.navLink} ${styles.support}`}>
          Tech&#39; support
        </a>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
