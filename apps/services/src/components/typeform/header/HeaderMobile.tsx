import React, { useState } from 'react';
import Image from 'next/image';
import styles from './HeaderMobile.module.css';
import CloseIcon from '@mui/icons-material/Close';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const HeaderMobile = () => {
  const [active, setActive] = useState(false);
  const handleclick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.desktopNone}>
      <div className={styles.navBar}>
        <a href="https://luos.io" className={styles.brand}>
          <Image src="/logo_luos.gif" alt="logo luos" width="75" height="25" />
        </a>
        {active ? (
          <CloseIcon className={styles.menu} onClick={() => handleclick()} />
        ) : (
          <SignalCellularAltIcon
            className={`${styles.menu} ${styles.burger}`}
            onClick={() => handleclick()}
          />
        )}
      </div>
      <div className={styles.content} style={active ? { display: 'block' } : { display: 'none' }}>
        <nav>
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
    </div>
  );
};

export default HeaderMobile;
