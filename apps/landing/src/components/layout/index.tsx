import clsx from 'clsx';
import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import {
  Header,
  NavbarItemTypes,
  NavbarItem,
  NavbarItemLink,
  NavbarItemDropdown,
  contexts,
} from '@packages/ui';

import styles from './styles.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { mode, systemMode } = useColorScheme();
  const { pathname } = useRouter();
  const { isSidebarOpen } = useContext(contexts.SidebarContext);

  const withActiveLink = (navbar: NavbarItem<NavbarItemLink | NavbarItemDropdown>[]) =>
    navbar.map((el) => {
      if (el.type === NavbarItemTypes.LINK && el.href === pathname) {
        el.active = true;
      } else if (el.type === NavbarItemTypes.DROPDOWN) {
        withActiveLink(el.items);
      }

      return el;
    });

  return (
    <div className="layout">
      <Header
        logo={
          <Image
            src={`/assets/images/logo-${mode === 'system' ? systemMode : mode ?? 'light'}.webp`}
            alt="Luos logo"
            width={100}
            height={37}
            style={{ objectFit: 'contain' }}
          />
        }
        navbar={withActiveLink([
          {
            type: NavbarItemTypes.LINK,
            name: 'Technology',
            href: '/docs/luos-technology',
          },
          {
            name: 'Resources',
            type: NavbarItemTypes.DROPDOWN,
            items: [
              {
                name: 'Get started',
                type: NavbarItemTypes.LINK,
                href: '/tutorials/get-started',
              },
              {
                name: 'Tutorials',
                type: NavbarItemTypes.LINK,
                href: '/tutorials',
              },
              {
                name: 'Documentation',
                type: NavbarItemTypes.LINK,
                href: '/docs/luos-technology',
              },
              {
                name: 'Troubleshooting',
                type: NavbarItemTypes.LINK,
                href: '/faq',
              },
              {
                name: 'Blog',
                type: NavbarItemTypes.LINK,
                href: '/blog',
              },
              {
                name: 'Roadmap',
                type: NavbarItemTypes.LINK,
                href: '/roadmap',
              },
            ],
          },
          {
            name: 'Community',
            type: NavbarItemTypes.DROPDOWN,
            items: [
              {
                name: 'Discord',
                type: NavbarItemTypes.LINK,
                href: 'https://discord.gg/luos',
              },
              {
                name: 'Reddit',
                type: NavbarItemTypes.LINK,
                href: 'https://www.reddit.com/r/Luos/',
              },
              {
                name: 'GitHub',
                type: NavbarItemTypes.LINK,
                href: 'https://github.com/luos-io',
              },
            ],
          },
        ])}
        enableLightingButton
      />
      <div className={clsx(isSidebarOpen ? styles.sidebarOpen : null)}>{children}</div>
    </div>
  );
};
export default Layout;
