import React, { useState } from 'react';
import styles from './styles.module.scss';
import GitHubButton from 'react-github-btn';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';
import { clsx } from 'clsx';
import { BlogPost, Tutorial } from './types';
import { Link } from '@mui/material';

export const Footer = (tutorials: Tutorial[], lastBlogPosts: BlogPost[]) => {
  const { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const [lastCommits, setLastCommits] = useState([]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <footer className={clsx('footer')} style={{ padding: '50px' }}>
      <Grid container style={{ marginBottom: '30px' }}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          {' '}
          <img
            src={
              mode === 'dark'
                ? '/assets/images/index/powered/luos.svg'
                : '/assets/images/index/powered/luos-dark.svg'
            }
            style={{ verticalAlign: 'middle', width: '150px' }}
            alt="luos-dark"
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <h2 className={styles.title}>Support us</h2>
          <div className="footer__bottom btn_footer">
            <GitHubButton
              href="https://github.com/luos-io"
              aria-label="Follow @luos-io on GitHub"
              data-size="large"
            >
              Follow @luos-io
            </GitHubButton>

            <GitHubButton
              href="https://github.com/luos-io/luos_engine"
              data-icon="octicon-star"
              aria-label="Star luos-io/documentation on GitHub"
              data-size="large"
              data-show-count="true"
            >
              Star
            </GitHubButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <h2 className={styles.titleCommunity}>Join our community</h2>
          <div className={styles.joinUsContainer}>
            <a href="https://discord.gg/luos" rel="nofollow">
              <img
                src="/assets/images/discord.svg"
                className="rsLogo"
                loading="lazy"
                alt="discord logo"
              ></img>
            </a>
            <a href="https://www.reddit.com/r/Luos/" rel="nofollow">
              <img
                src="/assets/images/reddit.svg"
                className="rsLogo"
                loading="lazy"
                alt="reddit logo"
              ></img>
            </a>
            <a href="https://twitter.com/Luos_io" rel="nofollow">
              <img
                src="/assets/images/twitter.svg"
                className="rsLogo"
                loading="lazy"
                alt="twitter logo"
              ></img>
            </a>
            <a href="https://www.linkedin.com/company/luos" rel="nofollow">
              <img
                src="/assets/images/linkedin.svg"
                className="rsLogo"
                loading="lazy"
                alt="linkedin logo"
              ></img>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWeIoHVY9Z-04kdwXNtv2FA"
              rel="nofollow"
            >
              <img
                src="/assets/images/youtube.svg"
                className="rsLogo"
                loading="lazy"
                alt="youtube logo"
              ></img>
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginBottom: '30px' }}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <h2 className={styles.subtitle}>Latest articles on our blog</h2>
          {lastBlogPosts.map((element, index) => (
            <Link
              key={index}
              href={element.permalink}
              className={`${styles.link} ${styles.blogArticle} `}
            >
              {element.title}
            </Link>
          ))}
          <Link className={`${styles.link} ${styles.blog}`} href="/blog">
            Our Blog
          </Link>
          <h2 className={styles.subtitle}>
            Latest tutorials on our documentation
          </h2>
          {tutorials.map((element, index) => (
            <Link key={index} href={element.link} className={styles.link}>
              {element.title}
            </Link>
          ))}
          <Link className={`${styles.link} ${styles.tuto}`} href="/tutorials">
            Our Tutorials
          </Link>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4} pr={4}>
          <h2 className={styles.subtitle}>Latest commits on Luos repository</h2>
          {lastCommits.map((element, index) => (
            <Link
              key={index}
              href={element.html_url}
              className={styles.link}
              rel="nofollow"
            >
              {element.commit.message}
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <h2 className={styles.subtitle}>Learn more about us</h2>
          <Link
            className={`${styles.link} ${styles.blog} ${styles.mbTen}`}
            href="/docs/luos-technology"
          >
            Technology
          </Link>
          <Link
            className={`${styles.link} ${styles.tuto} ${styles.mbTen}`}
            href="https://app.luos.io/"
          >
            Tools
          </Link>
          <span className={` ${styles.span} ${styles.ressources}`}>
            Resources
          </span>
          <ul className={styles.list}>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/tutorials/get-started"
              >
                Get Started
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/tutorials"
              >
                Tutorials
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/docs/luos-technology"
              >
                Documentation
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/faq"
              >
                Troubleshooting
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.ressourcesLink} ${styles.mbZero}`}
                href="/roadmap"
              >
                Roadmap
              </Link>
            </li>
          </ul>
          <span className={` ${styles.span} ${styles.community}`}>
            Community
          </span>
          <ul className={styles.list}>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.communityLink} ${styles.mbZero}`}
                href="https://discord.gg/luos"
                rel="nofollow"
              >
                Discord
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.communityLink} ${styles.mbZero}`}
                href="https://www.reddit.com/r/Luos/"
                rel="nofollow"
              >
                Reddit
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className={`${styles.link} ${styles.communityLink} ${styles.mbZero}`}
                href="https://github.com/Luos-io"
                rel="nofollow"
              >
                Github
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
