import FileCopyIcon from '@mui/icons-material/FileCopy';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useColorScheme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

import useInterval from 'utils/hooks/useInterval';

import styles from './vscode.module.scss';

import type { CommonProps } from '@mui/material/OverridableComponent';
import type { RegularBreakpoints } from '@mui/material/Grid';
import clsx from 'clsx';
interface VSCodeProps extends CommonProps, RegularBreakpoints {
  title?: string;
  height?: number;
  carousel?: {
    name: string;
    content: JSX.Element;
  }[];
  children?: ReactNode;
}

export const VSCode = ({
  title,
  height,
  carousel = [],
  children,
  style,
  className,
  ...otherProps
}: VSCodeProps) => {
  const { mode, systemMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const [isCarouselRunning, setCarouselRunning] = useState(true);
  const [currentCarouselValue, setCurrentCarouselValue] = useState<number>(0);
  const theme = useTheme();
  const xsMatches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setMounted(true);
  }, []);

  useInterval(
    () =>
      setCurrentCarouselValue(
        currentCarouselValue < carousel.length - 1 ? currentCarouselValue + 1 : 0,
      ),
    isCarouselRunning ? 4000 : null,
  );

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <Grid className={className} style={style} item container {...otherProps}>
      <Grid container className={styles.vscodeHeader}>
        <div
          className={styles.vscodeHeaderButtons}
          style={{ display: xsMatches && title ? 'none' : 'initial' }}
        >
          <Image src="/assets/images/vscode/buttons.svg" alt="buttons" width={100} height={18} />
        </div>
        {title && (
          <Grid item xs={12} className={styles.vscodeHeaderTitle}>
            {title}
          </Grid>
        )}
      </Grid>
      <Grid container className={styles.vscodeContent} style={{ height }}>
        <Grid
          item
          container
          xs={'auto'}
          className={styles.vscodeContentSidebar}
          display={xsMatches ? 'none' : 'flex'}
        >
          <FileCopyIcon className={styles.vscodeContentSidebarIcons} fontSize="large" />
          <SearchIcon className={styles.vscodeContentSidebarIcons} fontSize="large" />
          <Image
            src={`/assets/images/vscode/luos-${
              mode === 'system' ? systemMode : mode ?? 'light'
            }.svg`}
            alt="luos"
            width={35}
            height={25}
            style={{ margin: theme.spacing(1, 0) }}
          />
        </Grid>
        {carousel.length > 1 && (
          <Grid item container xs={3} className={styles.vscodeContentLeft}>
            <RadioGroup
              className={styles.vscodeContentLeftGroup}
              aria-labelledby="vscode-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={currentCarouselValue}
              onChange={(event) => {
                setCurrentCarouselValue(
                  carousel.findIndex(({ name }) => event.target.value === name),
                );
              }}
            >
              {carousel.map(({ name }) => (
                <FormControlLabel
                  key={`vscode-${title}-carousel-item-${name}`}
                  value={name}
                  label={name}
                  className={clsx(
                    styles.carouselValue,
                    carousel[currentCarouselValue].name === name
                      ? styles.carouselValueActive
                      : null,
                  )}
                  disableTypography
                  control={<Radio style={{ display: 'none' }} />}
                />
              ))}
            </RadioGroup>
          </Grid>
        )}
        <Grid
          item
          container
          xs={true}
          className={styles.vscodeContentRight}
          borderLeft={xsMatches ? '2px solid black' : 'none'}
          onClick={() => setCarouselRunning(false)}
        >
          {carousel.length > 0
            ? carousel.find(({ name }) => carousel[currentCarouselValue].name === name)?.content
            : children}
        </Grid>
      </Grid>
      <Grid item xs={12} className={styles.vscodeFooter}>
        {' '}
      </Grid>
    </Grid>
  );
};
export default VSCode;
