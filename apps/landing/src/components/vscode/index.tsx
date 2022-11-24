import FileCopyIcon from '@mui/icons-material/FileCopy';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';
import { ReactNode } from 'react';

import styles from './vscode.module.scss';

import type { CommonProps } from '@mui/material/OverridableComponent';
import type { RegularBreakpoints } from '@mui/material/Grid';

interface VSCodeProps extends CommonProps, RegularBreakpoints {
  title?: string;
  height?: number;
  children: ReactNode;
}

export const VSCode = ({
  title,
  height,
  children,
  style,
  className,
  ...otherProps
}: VSCodeProps) => {
  const { mode } = useColorScheme();
  return (
    <Grid className={className} style={style} item container {...otherProps}>
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
      <Grid container className={styles.vscodeContent} style={{ height }}>
        <Grid item container xs={1} className={styles.vscodeContentLeft}>
          <FileCopyIcon className={styles.vscodeContentLeftIcons} fontSize="large" />
          <SearchIcon className={styles.vscodeContentLeftIcons} fontSize="large" />
          <Image
            src={`/assets/images/index/introduction/luos${mode === 'light' ? '-white' : ''}.svg`}
            alt="luos"
            width={35}
            height={25}
          />
        </Grid>
        <Grid item container xs={11} className={styles.vscodeContentRight}>
          {children}
        </Grid>
      </Grid>
      <Grid item xs={12} className={styles.vscodeFooter}>
        {' '}
      </Grid>
    </Grid>
  );
};
export default VSCode;
