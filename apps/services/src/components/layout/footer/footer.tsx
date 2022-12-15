import Grid from '@mui/material/Grid';
import Image from 'next/image';

import styles from 'components/layout/footer/footer.module.scss';

export const Footer = () => {
  const links = [
    {
      title: 'Docs',
      items: [
        {
          label: 'Documentation',
          to: 'https://docs.luos.io/docs/luos-technology/luos_tech',
        },
        {
          label: 'Contact us',
          to: 'https://docs.luos.io/feedbacks/send',
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Discord',
          to: 'https://discord.gg/luos',
        },
        {
          label: 'Reddit',
          to: 'https://www.reddit.com/r/Luos/',
        },
      ],
    },
    {
      title: 'More',
      items: [
        {
          label: 'GitHub',
          to: 'https://github.com/luos-io',
        },
        {
          label: 'Youtube',
          to: 'https://www.youtube.com/channel/UCWeIoHVY9Z-04kdwXNtv2FA',
        },
      ],
    },
  ];
  const copyright = `Copyright © ${new Date().getFullYear()} Luos, built with Vercel.`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.joinUsContainer}>
          <h3>Join us on</h3>
          <a href="https://discord.gg/luos" style={{ marginRight: '15px', marginLeft: '15px' }}>
            <Image
              className={styles.rsLogo}
              width={32}
              height={32}
              src="/assets/images/footer/discord.png"
              alt="Join our Discord community"
            />
          </a>
          <a href="https://www.reddit.com/r/Luos/" style={{ marginRight: '15px' }}>
            <Image
              className={styles.rsLogo}
              width={32}
              height={32}
              src="/assets/images/footer/reddit.png"
              alt="Follow us on Reddit"
            />
          </a>
          <a href="https://twitter.com/Luos_io" style={{ marginRight: '15px' }}>
            <Image
              className={styles.rsLogo}
              width={32}
              height={32}
              src="/assets/images/footer/twitter.png"
              alt="Follow us on Twitter"
            />
          </a>
          <a href="https://www.linkedin.com/company/luos" style={{ marginRight: '15px' }}>
            <Image
              className={styles.rsLogo}
              width={32}
              height={32}
              src="/assets/images/footer/linkedin.png"
              alt="Follow us on LinkedIn"
            />
          </a>
        </div>
        {links && links.length > 0 && (
          <Grid container className={styles.footer__links}>
            {links.map((linkItem, i) => (
              <Grid key={i} item xs={4} className={styles.footer_col}>
                {linkItem.title != null ? (
                  <div className={`${styles.widget_title}`}>
                    <h4> {linkItem.title}</h4>
                    <span></span>
                  </div>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className={styles.footer__items}>
                    {linkItem.items.map((item, key) => (
                      <li key={key} className={styles.footer__items}>
                        <a className={styles.footer__link_item} href={item.to}>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Grid>
            ))}
          </Grid>
        )}
        <div
          className={styles.footer__copyright}
          dangerouslySetInnerHTML={{
            __html: copyright,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
