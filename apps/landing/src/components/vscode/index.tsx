import Image from 'next/image';
import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import SearchIcon from '@mui/icons-material/Search';

import styles from './vscode.module.css';

import type { CommonProps } from '@mui/material/OverridableComponent';
import type { GridSize } from '@mui/material/Grid';

interface VSCodeProps extends CommonProps {
  title?: string;
  children: ReactNode;
  xs?: boolean | GridSize;
  md?: boolean | GridSize;
  lg?: boolean | GridSize;
}

export const VSCode = ({ title, children, xs, md, lg, style, className }: VSCodeProps) => {
  const { mode } = useColorScheme();
  return (
    <Grid
      className={`${styles.vscodeContainer} ${className}`}
      style={style}
      item
      xs={xs}
      md={md}
      lg={lg}
    >
      <Grid container className={styles.vscodeHeader}>
        <div className={styles.vscodeHeaderButtons}>
          <Image
            src="/assets/images/index/introduction/buttons.svg"
            alt="buttons"
            width={100}
            height={18}
          />
        </div>
        {title && (
          <Grid item xs={12} className={styles.vscodeHeaderTitle}>
            {title}
          </Grid>
        )}
      </Grid>
      <Grid container className={styles.vscodeContent}>
        <Grid item container xs={2} md={1} lg={1} className={styles.vscodeContentLeft}>
          <FileCopyIcon className={styles.vscodeContentLeftIcons} fontSize="large" />
          <SearchIcon className={styles.vscodeContentLeftIcons} fontSize="large" />
          <Image
            src={`/assets/images/index/introduction/luos${mode === 'light' ? '-white' : ''}.svg`}
            alt="luos"
            width={35}
            height={25}
          />
        </Grid>
        <Grid item container xs={10} md={11} lg={11} className={styles.vscodeContentRight}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12} className={styles.vscodeFooter}>
        {' '}
      </Grid>
    </Grid>
  );
};
export default VSCode;
