import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Header, NavbarItemTypes } from '@packages/ui';

import type { NavbarItem, NavbarItemLink, NavbarItemDropdown } from '@packages/ui';

export interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { mode, systemMode } = useColorScheme();
  const { pathname } = useRouter();

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
            width={200}
            height={37}
            style={{ objectFit: 'contain' }}
          />
        }
        navbar={withActiveLink([
          {
            type: NavbarItemTypes.LINK,
            name: 'Technology',
            href: '/documentation/luos-technology',
          },
          {
            name: 'Resources',
            type: NavbarItemTypes.DROPDOWN,
            items: [
              {
                name: 'Get started',
                type: NavbarItemTypes.LINK,
                href: '/documentation/tutorials/get-started',
              },
              {
                name: 'Tutorials',
                type: NavbarItemTypes.LINK,
                href: '/documentation/tutorials',
              },
              {
                name: 'Documentation',
                type: NavbarItemTypes.LINK,
                href: '/documentation/luos-technology',
              },
              {
                name: 'Troubleshooting',
                type: NavbarItemTypes.LINK,
                href: '/documentation/faq',
              },
              {
                name: 'Blog',
                type: NavbarItemTypes.LINK,
                href: '/documentation/blog',
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
      {children}
    </div>
  );
};
export default Layout;
